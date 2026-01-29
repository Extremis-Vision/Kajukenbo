<template>
  <section id="disciplines" class="disciplines-section">
    <div class="section-bg"></div>
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-label">
          <span class="label-line"></span>
          Les Fondements
          <span class="label-line"></span>
        </span>
        <h2 class="section-title">
          <span class="title-letter ka">KA</span>
          <span class="title-dot">•</span>
          <span class="title-letter ju">JU</span>
          <span class="title-dot">•</span>
          <span class="title-letter ken">KEN</span>
          <span class="title-dot">•</span>
          <span class="title-letter bo">BO</span>
        </h2>
        <p class="section-subtitle">
          Quatre disciplines, un art martial complet
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="disciplines-grid">
        <div 
          v-for="(discipline, index) in disciplines" 
          :key="discipline.id"
          class="discipline-card"
          :class="{ active: activeCard === index }"
          @mouseenter="activeCard = index"
        >
          <div class="card-accent"></div>
          <div class="card-content">
            <div class="card-header">
              <div class="card-abbr-wrapper">
                <span class="card-abbr">{{ discipline.abbr }}</span>
              </div>
              <div class="card-info">
                <h3 class="card-title">{{ discipline.name }}</h3>
                <span class="card-origin">{{ discipline.origin }}</span>
              </div>
            </div>
            
            <p class="card-description">{{ discipline.description }}</p>
            
            <div class="card-techniques">
              <div 
                v-for="technique in discipline.techniques" 
                :key="technique"
                class="technique-tag"
              >
                {{ technique }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="disciplines-nav">
        <button 
          v-for="(discipline, index) in disciplines" 
          :key="discipline.id"
          :class="['nav-tab', { active: activeCard === index }]"
          @click="activeCard = index"
        >
          <span class="tab-abbr">{{ discipline.abbr }}</span>
          <span class="tab-name">{{ discipline.name }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Discipline {
  id: string
  abbr: string
  name: string
  origin: string
  description: string
  techniques: string[]
}

const disciplines: Discipline[] = [
  {
    id: 'ka',
    abbr: 'KA',
    name: 'Karaté',
    origin: 'Okinawa, Japon',
    description: 'Art martial axé sur les frappes puissantes avec les poings et les pieds. Le Karaté apporte au Kajukenbo ses techniques de percussion dévastatrices et sa discipline mentale.',
    techniques: ['Coups de poing', 'Coups de pied', 'Blocages', 'Katas']
  },
  {
    id: 'ju',
    abbr: 'JU',
    name: 'Judo / Jujutsu',
    origin: 'Japon',
    description: 'Arts de la souplesse utilisant les projections et les contrôles au sol. Ces disciplines apportent l\'efficacité du combat rapproché et la maîtrise des clés.',
    techniques: ['Projections', 'Immobilisations', 'Étranglements', 'Clés articulaires']
  },
  {
    id: 'ken',
    abbr: 'KEN',
    name: 'Kenpo',
    origin: 'Hawaï / Chine',
    description: 'Le Kenpo hawaïen est un système de combat rapide et fluide, utilisant des enchaînements de frappes multiples et des techniques de mains sophistiquées.',
    techniques: ['Frappes en série', 'Mouvements fluides', 'Contre-attaques', 'Défense rapide']
  },
  {
    id: 'bo',
    abbr: 'BO',
    name: 'Boxe Chinoise',
    origin: 'Chine',
    description: 'Le Kung-fu chinois apporte au Kajukenbo la fluidité des mouvements, les techniques de jambes sophistiquées et la philosophie ancestrale du combat.',
    techniques: ['Techniques de jambes', 'Balayages', 'Saisies', 'Mobilité']
  }
]

const activeCard = ref(0)
</script>

<style scoped>
.disciplines-section {
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
}

.section-bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 0% 50%, rgba(196, 30, 58, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 100% 50%, rgba(196, 30, 58, 0.05) 0%, transparent 40%);
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
  position: relative;
  z-index: 1;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-4);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: var(--space-6);
}

.label-line {
  width: 30px;
  height: 1px;
  background: var(--color-primary);
  opacity: 0.5;
}

.section-title {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-4);
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 900;
  margin-bottom: var(--space-4);
}

.title-letter {
  display: inline-block;
  background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all var(--transition-base);
}

.title-letter:hover {
  transform: scale(1.1);
  text-shadow: 0 0 40px rgba(196, 30, 58, 0.5);
}

.title-dot {
  color: var(--color-text-subtle);
  font-weight: 300;
}

.section-subtitle {
  font-size: var(--text-xl);
  color: var(--color-text-muted);
  font-weight: 300;
}

/* Grid */
.disciplines-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-10);
  position: relative;
  z-index: 1;
}

/* Card */
.discipline-card {
  position: relative;
  padding: var(--space-8);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
}

.discipline-card:hover,
.discipline-card.active {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(196, 30, 58, 0.3);
  transform: translateY(-8px);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(196, 30, 58, 0.1);
}

.card-accent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.discipline-card:hover .card-accent,
.discipline-card.active .card-accent {
  opacity: 1;
}

.card-content {
  position: relative;
  z-index: 1;
}

/* Card Header */
.card-header {
  display: flex;
  align-items: flex-start;
  gap: var(--space-4);
  margin-bottom: var(--space-5);
}

.card-abbr-wrapper {
  flex-shrink: 0;
}

.card-abbr {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: var(--radius-lg);
  font-weight: 900;
  font-size: var(--text-lg);
  color: var(--color-text);
  box-shadow: 0 8px 24px rgba(196, 30, 58, 0.3);
}

.card-info {
  flex: 1;
}

.card-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.card-origin {
  font-size: var(--text-xs);
  color: var(--color-primary);
  font-style: italic;
}

/* Card Description */
.card-description {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-5);
}

/* Techniques */
.card-techniques {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  padding-top: var(--space-4);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.technique-tag {
  padding: var(--space-1) var(--space-3);
  background: rgba(196, 30, 58, 0.1);
  border: 1px solid rgba(196, 30, 58, 0.2);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  transition: all var(--transition-base);
}

.discipline-card:hover .technique-tag,
.discipline-card.active .technique-tag {
  background: rgba(196, 30, 58, 0.15);
  color: var(--color-text);
}

/* Navigation */
.disciplines-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.nav-tab {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  padding: var(--space-3) var(--space-6);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-base);
}

.nav-tab:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(196, 30, 58, 0.3);
}

.nav-tab.active {
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-color: transparent;
  box-shadow: 0 8px 24px rgba(196, 30, 58, 0.4);
}

.tab-abbr {
  font-size: var(--text-lg);
  font-weight: 800;
  color: var(--color-text);
}

.tab-name {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

.nav-tab.active .tab-name {
  color: var(--color-text);
}

/* Responsive */
@media (max-width: 1200px) {
  .disciplines-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .disciplines-section {
    padding: var(--space-16) 0;
  }

  .section-title {
    flex-wrap: wrap;
    gap: var(--space-2);
  }

  .disciplines-grid {
    grid-template-columns: 1fr;
  }

  .nav-tab {
    padding: var(--space-2) var(--space-4);
  }

  .tab-name {
    display: none;
  }
}
</style>
