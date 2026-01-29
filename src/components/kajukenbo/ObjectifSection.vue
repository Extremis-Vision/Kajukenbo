<template>
  <section id="objectif" class="objectif-section">
    <div class="section-bg"></div>
    <div class="container">
      <div class="objectif-content">
        <!-- Text -->
        <div class="objectif-text">
          <div class="section-header">
            <span class="section-subtitle">Formation</span>
            <h2 class="section-title">
              L'<span class="title-accent">Objectif</span> du Pratiquant
            </h2>
          </div>
          
          <p class="objectif-intro">
            Au-delà des techniques, le pratiquant développe des qualités essentielles 
            qui transforment sa perception du combat et son attitude au quotidien.
          </p>

          <div class="qualities-grid">
            <div 
              v-for="(quality, index) in qualities" 
              :key="quality.name"
              class="quality-card glass"
              :style="{ animationDelay: `${index * 0.1}s` }"
            >
              <div class="quality-icon">
                <component :is="quality.icon" />
              </div>
              <div class="quality-content">
                <h3 class="quality-name">{{ quality.name }}</h3>
                <p class="quality-desc">{{ quality.description }}</p>
              </div>
            </div>
          </div>

          <div class="objectif-quote">
            <div class="quote-line"></div>
            <blockquote>
              "Améliorer ses qualités naturelles de 
              <strong>perception</strong>, <strong>fluidité</strong>, 
              <strong>vitesse</strong> et <strong>puissance</strong>."
            </blockquote>
          </div>
        </div>

        <!-- Image -->
        <div class="objectif-image">
          <div class="image-wrapper">
            <div class="image-sculpt">
              <img 
                :src="trainingImage" 
                alt="Entraînement Kajukenbo" 
              />
              <div class="image-overlay"></div>
            </div>
            
            <!-- Floating Elements -->
            <div class="floating-stat stat-1 glass">
              <span class="stat-value">Fluidité</span>
              <span class="stat-label">Développement</span>
            </div>
            <div class="floating-stat stat-2 glass">
              <span class="stat-value">Puissance</span>
              <span class="stat-label">Maîtrise</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

import trainingImage from '~/assets/images/practitioner-goal.jpg'

// SVG Icons as functional components
const IconEye = h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('path', { d: 'M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' }),
  h('circle', { cx: '12', cy: '12', r: '3' })
])

const IconZap = h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2' })
])

const IconBulb = h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('path', { d: 'M9 18h6' }),
  h('path', { d: 'M10 22h4' }),
  h('path', { d: 'M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 12 4a4.65 4.65 0 0 0-4.5 7.5c.76.76 1.23 1.52 1.41 2.5' })
])

const IconTarget = h('svg', { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, [
  h('circle', { cx: '12', cy: '12', r: '10' }),
  h('circle', { cx: '12', cy: '12', r: '6' }),
  h('circle', { cx: '12', cy: '12', r: '2' })
])

const qualities = [
  {
    icon: IconEye,
    name: 'Lucidité',
    description: 'Conscience aigue de l\'environnement et analyse tactique immédiate.'
  },
  {
    icon: IconZap,
    name: 'Rapidité',
    description: 'Réflexes aiguisés pour réduire le temps de réaction au minimum.'
  },
  {
    icon: IconBulb,
    name: 'Créativité',
    description: 'Capacité d\'adaptation constante face à l\'imprévu.'
  },
  {
    icon: IconTarget,
    name: 'Spontanéité',
    description: 'Réaction naturelle et instinctive, libérée de la réflexion.'
  }
]
</script>

<style scoped>
.objectif-section {
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
}

.section-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 100% 30%, rgba(196, 30, 58, 0.05) 0%, transparent 60%);
}

.objectif-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-20);
  align-items: center;
}

/* Text */
.objectif-text {
  order: 1;
}

.section-subtitle {
  display: block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--space-8);
  line-height: 1.1;
}

.title-accent {
  background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.objectif-intro {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: var(--space-12);
  max-width: 600px;
}

/* Qualities Grid */
.qualities-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4) var(--space-6);
  margin-bottom: var(--space-12);
}

.quality-card {
  display: flex;
  align-items: flex-start;
  gap: var(--space-5);
  padding: var(--space-6);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
  animation: fadeInUp 0.5s ease backwards;
}

.quality-card:hover {
  background: rgba(196, 30, 58, 0.05);
  border-color: rgba(196, 30, 58, 0.2);
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.quality-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, rgba(196, 30, 58, 0.1), rgba(196, 30, 58, 0.05));
  border-radius: var(--radius-md);
  color: var(--color-primary);
  flex-shrink: 0;
  transition: all var(--transition-base);
}

.quality-card:hover .quality-icon {
  transform: scale(1.1) rotate(5deg);
  background: linear-gradient(135deg, rgba(196, 30, 58, 0.2), rgba(196, 30, 58, 0.1));
}

.quality-name {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.quality-desc {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Quote */
.objectif-quote {
  position: relative;
  padding-left: var(--space-6);
}

.quote-line {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(180deg, var(--color-primary), transparent);
  border-radius: var(--radius-full);
}

.objectif-quote blockquote {
  font-size: var(--text-lg);
  color: var(--color-text);
  font-style: italic;
  line-height: 1.6;
  margin: 0;
}

.objectif-quote strong {
  color: var(--color-primary);
  font-weight: 600;
}

/* Image */
.objectif-image {
  order: 2;
  display: flex;
  justify-content: center;
  padding: var(--space-8);
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 500px;
}

.image-sculpt {
  position: relative;
  border-radius: 250px 250px 0 0;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  transition: transform var(--transition-slow);
}

.image-sculpt img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-wrapper:hover .image-sculpt {
  transform: translateY(-10px);
}

.image-wrapper:hover .image-sculpt img {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.6) 100%);
}

.floating-stat {
  position: absolute;
  padding: var(--space-4) var(--space-6);
  background: rgba(10, 10, 10, 0.85);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  animation: float 6s ease-in-out infinite;
  transition: all var(--transition-base);
  z-index: 10;
}

.floating-stat:hover {
  background: rgba(196, 30, 58, 0.1);
  border-color: rgba(196, 30, 58, 0.3);
  transform: scale(1.05);
}

.stat-1 {
  top: 15%;
  right: -60px;
  animation-delay: 0s;
}

.stat-2 {
  bottom: 15%;
  left: -60px;
  animation-delay: -3s;
}

.stat-value {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-text);
}

.stat-label {
  font-size: var(--text-xs);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Responsive */
@media (max-width: 1024px) {
  .objectif-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .objectif-text {
    order: 2;
  }

  .objectif-image {
    order: 1;
  }
}

@media (max-width: 768px) {
  .objectif-section {
    padding: var(--space-16) 0;
  }

  .qualities-grid {
    grid-template-columns: 1fr;
  }
  
  .image-sculpt {
    border-radius: var(--radius-xl);
  }
}
</style>
