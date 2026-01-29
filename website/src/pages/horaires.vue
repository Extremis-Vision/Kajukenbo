<template>
  <div class="horaires-page">
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">Horaires & <span class="text-gradient">Training</span></h1>
        <p class="page-subtitle">Rejoignez-nous à Altkirch pour vos entraînements.</p>
      </div>
    </div>

    <div class="container content-wrapper">
      <!-- Widget Vacances -->
      <HolidayChecker />

      <!-- Grille Horaires -->
      <ScheduleGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
import HolidayChecker from '~/components/horaires/HolidayChecker.vue'
import ScheduleGrid from '~/components/horaires/ScheduleGrid.vue'

useHead({
  title: 'Horaires & Tarifs | Kajukenbo Alsace',
  meta: [
    { 
      name: 'description', 
      content: 'Consultez les horaires des cours de Kajukenbo et Self-Défense à Altkirch. Vérifiez le calendrier scolaire en temps réel.' 
    }
  ]
})
</script>

<style scoped>
.horaires-page {
  padding-top: 100px; /* Navbar height */
  min-height: 100vh;
  background-color: var(--color-background);
}

.page-header {
  padding: var(--space-12) 0;
  text-align: center;
}

.page-title {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  color: var(--color-text);
  line-height: 1.1;
  margin-bottom: var(--space-4);
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: var(--text-xl);
  color: var(--color-text-muted);
}

.content-wrapper {
  padding-bottom: var(--space-24);
  max-width: 1000px;
}
</style>
