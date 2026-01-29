<template>
  <section id="objectifs" class="objectifs-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-label">Notre Association</span>
        <h2 class="section-title">
          <span class="title-accent">Objectifs</span> & Mission
        </h2>
      </div>

      <!-- Content Grid -->
      <div class="objectifs-grid">
        <!-- Text Content -->
        <div class="objectifs-text">
          <div class="text-card glass">
            <div class="card-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <p class="main-text">
              L'objet de notre association est la pratique du 
              <strong>Kajukenbo</strong> (art martial d'origine Hawaïenne) 
              et la <strong>self-défense</strong>.
            </p>
            <div class="divider"></div>
            <p class="secondary-text">
              Un art martial unique né à Hawaï, combinant les meilleures techniques 
              de cinq disciplines pour une efficacité maximale en situation réelle.
            </p>
            <div class="disciplines-tags">
              <span class="tag">KA - Karate</span>
              <span class="tag">JU - Judo/Jujutsu</span>
              <span class="tag">KEN - Kenpo</span>
              <span class="tag">BO - Boxe Chinoise</span>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="objectifs-image">
          <div class="image-container">
            <img 
              :src="trainingImage" 
              alt="Groupe d'entraînement Kajukenbo Alsace" 
              loading="lazy"
            />
            <div class="image-overlay"></div>
            <div class="image-border"></div>
          </div>
          <div class="image-caption">
            <span class="caption-icon">📍</span>
            <span>Alsace, France</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Objectifs section component
import trainingImage from '~/assets/images/training-group.jpg'
</script>

<style scoped>
.objectifs-section {
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-label {
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--color-text);
}

.title-accent {
  color: var(--color-primary);
}

/* Content Grid */
.objectifs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  align-items: center;
}

/* Text Content */
.objectifs-text {
  order: 1;
}

.text-card {
  padding: var(--space-10);
  position: relative;
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: var(--radius-lg);
  margin-bottom: var(--space-6);
}

.card-icon svg {
  stroke: var(--color-text);
}

.main-text {
  font-size: var(--text-xl);
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: var(--space-6);
}

.main-text strong {
  color: var(--color-primary);
  font-weight: 600;
}

.divider {
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), transparent);
  margin-bottom: var(--space-6);
}

.secondary-text {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-6);
}

/* Tags */
.disciplines-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tag {
  display: inline-block;
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--color-text-muted);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  transition: all var(--transition-base);
}

.tag:hover {
  background: rgba(196, 30, 58, 0.2);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Image */
.objectifs-image {
  order: 2;
}

.image-container {
  position: relative;
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 16 / 10;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-container:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.7) 100%
  );
  pointer-events: none;
}

.image-border {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  pointer-events: none;
}

.image-caption {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
  font-size: var(--text-sm);
  color: var(--color-text-subtle);
}

.caption-icon {
  font-size: var(--text-base);
}

/* Responsive */
@media (max-width: 1024px) {
  .objectifs-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .objectifs-text {
    order: 2;
  }

  .objectifs-image {
    order: 1;
  }
}

@media (max-width: 768px) {
  .objectifs-section {
    padding: var(--space-16) 0;
  }

  .text-card {
    padding: var(--space-6);
  }

  .main-text {
    font-size: var(--text-lg);
  }

  .disciplines-tags {
    justify-content: center;
  }
}
</style>
