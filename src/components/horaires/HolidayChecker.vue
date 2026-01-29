<template>
  <div class="holiday-checker" :class="stateClass">
    <!-- Loading State -->
    <div v-if="loading" class="status-content">
      <span class="loader"></span>
      <span>Vérification du calendrier scolaire...</span>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="status-content error">
      ⚠️ Impossible de vérifier les vacances (API indisponible)
    </div>

    <!-- Active State -->
    <div v-else class="status-content">
      <div class="status-icon">
        {{ statusIcon }}
      </div>
      <div class="status-text">
        <h3 class="status-title">
          {{ statusTitle }}
        </h3>
        <!-- Cas: Vacances actuelles -->
        <p class="status-desc" v-if="isHoliday">
          Nous sommes en période de <strong>{{ currentHolidayName }}</strong>.
          <br>Reprise le {{ formatDate(currentHolidayEnd) }}.
        </p>
        <!-- Cas: Prochaines vacances (Alerte) -->
        <p class="status-desc" v-else-if="nextHolidayStart">
          Pendant les {{ nextHolidayName }} : <br>
          du {{ formatDate(nextHolidayStart) }} au {{ formatDate(nextHolidayEnd) }}.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const loading = ref(true)
const error = ref(false)
const isHoliday = ref(false)
const currentHolidayName = ref('')
const currentHolidayEnd = ref('')
const nextHolidayName = ref('')
const nextHolidayStart = ref('')
const nextHolidayEnd = ref('')

const formatDate = (dateStr: string) => {
  if (!dateStr) return ''
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })
}

// Computed properties pour gérer l'affichage proprement
const hasWarning = computed(() => !isHoliday.value && nextHolidayStart.value)

const stateClass = computed(() => {
  if (isHoliday.value || hasWarning.value) return 'is-holiday' // Rouge
  return 'is-school' // Vert
})

const statusTitle = computed(() => {
  if (isHoliday.value) return 'Pas de cours actuellement'
  if (hasWarning.value) return "⚠️ Il n'y a pas de cours"
  return 'Les cours sont maintenus'
})

const statusIcon = computed(() => {
  if (isHoliday.value || hasWarning.value) return '🏖️'
  return '📚'
})

const checkHolidays = async () => {
  try {
    const today = new Date().toISOString().split('T')[0]
    // Fetch upcoming or current holidays for Nancy-Metz
    // Using ODS API v2.1
    const response = await fetch(
      'https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-calendrier-scolaire/records?limit=20&refine=location%3A%22Nancy-Metz%22&order_by=start_date%20asc&where=end_date%20%3E%3D%20now()'
    )
    const data = await response.json()
    
    if (!data.results || data.results.length === 0) {
      loading.value = false
      return
    }

    const now = new Date()
    const holidays = data.results.map((h: any) => ({
      name: h.description,
      start: new Date(h.start_date),
      end: new Date(h.end_date)
    })).sort((a: any, b: any) => a.start - b.start)

    // Check if today is holiday
    const current = holidays.find((h: any) => now >= h.start && now <= h.end)
    
    if (current) {
      isHoliday.value = true
      currentHolidayName.value = current.name
      currentHolidayEnd.value = current.end.toISOString()
    } else {
      isHoliday.value = false
      // Find next holiday
      const next = holidays.find((h: any) => h.start > now)
      if (next) {
        nextHolidayName.value = next.name
        nextHolidayStart.value = next.start.toISOString()
        nextHolidayEnd.value = next.end.toISOString()
      }
    }

    loading.value = false
  } catch (e) {
    console.error('Holiday API Error:', e)
    error.value = true
    loading.value = false
  }
}

onMounted(() => {
  checkHolidays()
})
</script>

<style scoped>
.holiday-checker {
  padding: var(--space-6);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all var(--transition-base);
}

.holiday-checker.is-holiday {
  background: rgba(196, 30, 58, 0.15); /* Red tint plus visible */
  border-color: #ef4444;
}

.holiday-checker.is-holiday .status-title {
    color: #ef4444; /* Titre en rouge aussi */
}

.holiday-checker.is-school {
  background: rgba(16, 185, 129, 0.1); /* Green tint */
  border-color: #10B981;
}

.status-content {
  display: flex;
  align-items: center;
  gap: var(--space-6);
}

.status-icon {
  display: flex; /* Fix alignment */
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  animation: bounce 2s infinite;
}

.status-text {
  text-align: left;
}

.status-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.status-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.4;
}

.status-desc strong {
  color: var(--color-text);
}

.loader {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255,255,255,0.1);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@media (max-width: 640px) {
  .status-content {
    flex-direction: column;
    text-align: center;
    gap: var(--space-3);
  }
  
  .status-text {
    text-align: center;
  }
}
</style>
