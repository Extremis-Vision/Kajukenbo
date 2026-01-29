<template>
  <section id="origine" class="origin-section">
    <div class="section-bg"></div>
    <div class="container">
      <div class="origin-content">
        <!-- Text -->
        <div class="origin-text">
          <span class="section-label">
            <span class="label-line"></span>
            Les Origines
          </span>
          <h2 class="section-title">
            Naissance d'un <span class="title-accent">Art Martial</span>
          </h2>
          
          <div class="origin-info">
            <div class="origin-dates">
              <div class="location-badge">
                <span class="location-icon">🌺</span>
                <span>Honolulu, Hawaï</span>
              </div>
            </div>
            
            <p class="origin-description">
              Le <strong>KAJUKENBO</strong> est né à Honolulu entre 1947 et 1950, 
              sur l'initiative de <strong>Maître Adriano EMPERADO</strong> du Kenpo Hawaïen, 
              également Boxeur et Escrimador.
            </p>
            
            <div class="origin-quote">
              <blockquote>
                Cet art martial unique a été développé pour répondre aux besoins de 
                self-défense dans les rues difficiles d'Hawaï, combinant le meilleur 
                de plusieurs disciplines martiales.
              </blockquote>
            </div>
            
            <div class="origin-stats">
              <div class="stat">
                <span class="stat-number">5</span>
                <span class="stat-label">Arts Martiaux</span>
              </div>
              <div class="stat">
                <span class="stat-number">75+</span>
                <span class="stat-label">Ans d'histoire</span>
              </div>
              <div class="stat">
                <span class="stat-number">∞</span>
                <span class="stat-label">Efficacité</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="origin-image">
          <div class="image-wrapper">
            <div class="image-glow"></div>
            <div class="image-frame">
              <img 
                :src="sijoImage" 
                alt="Sijo Adriano Emperado - Fondateur du Kajukenbo" 
              />
              <div class="image-overlay"></div>
            </div>
            <div class="image-border"></div>
          </div>
          <div class="image-caption">
            <span class="caption-badge">FONDATEUR</span>
            <span class="caption-title">Sijo Adriano EMPERADO</span>
            <span class="caption-subtitle">Grand Maître du Kajukenbo</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import sijoImage from '~/assets/images/sijo-emperado.jpg'
</script>

<style scoped>
.origin-section {
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
}

.section-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(196, 30, 58, 0.02) 50%, transparent 100%);
}

.origin-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

/* Text */
.origin-text {
  order: 1;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
}

.label-line {
  width: 40px;
  height: 2px;
  background: var(--color-primary);
}

.section-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--space-10);
  line-height: 1.1;
}

.title-accent {
  background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.origin-info {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.origin-dates {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.date-badge {
  display: inline-flex;
  padding: var(--space-3) var(--space-5);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: var(--radius-lg);
  box-shadow: 0 10px 30px rgba(196, 30, 58, 0.3);
}

.date-year {
  font-weight: 800;
  font-size: var(--text-lg);
  color: var(--color-text);
  letter-spacing: 0.05em;
}

.location-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-4);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.location-icon {
  font-size: var(--text-lg);
}

.origin-description {
  font-size: var(--text-xl);
  color: var(--color-text);
  line-height: 1.8;
}

.origin-description strong {
  color: var(--color-primary);
  font-weight: 600;
}

.origin-quote {
  position: relative;
  padding: var(--space-6);
  background: rgba(196, 30, 58, 0.05);
  border-left: 4px solid var(--color-primary);
  border-radius: 0 var(--radius-lg) var(--radius-lg) 0;
}

.origin-quote blockquote {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  font-style: italic;
  margin: 0;
}

/* Stats */
.origin-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-4);
  padding-top: var(--space-6);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.stat-number {
  font-size: var(--text-3xl);
  font-weight: 900;
  color: var(--color-primary);
  line-height: 1;
}

.stat-label {
  font-size: var(--text-xs);
  color: var(--color-text-subtle);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: var(--space-1);
}

/* Image */
.origin-image {
  order: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-wrapper {
  position: relative;
  max-width: 380px;
}

.image-glow {
  position: absolute;
  inset: -20px;
  background: radial-gradient(circle, rgba(196, 30, 58, 0.3) 0%, transparent 70%);
  filter: blur(30px);
  z-index: 0;
}

.image-frame {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  aspect-ratio: 3 / 4;
  z-index: 2;
}

.image-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-wrapper:hover .image-frame img {
  transform: scale(1.08);
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 40%,
    rgba(0, 0, 0, 0.9) 100%
  );
  pointer-events: none;
}

.image-border {
  position: absolute;
  inset: -3px;
  border: 2px solid var(--color-primary);
  border-radius: calc(var(--radius-2xl) + 3px);
  z-index: 1;
  opacity: 0.5;
}

.image-caption {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: var(--space-6);
  text-align: center;
}

.caption-badge {
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--color-primary);
  letter-spacing: 0.2em;
  margin-bottom: var(--space-2);
}

.caption-title {
  font-size: var(--text-xl);
  font-weight: 800;
  color: var(--color-text);
}

.caption-subtitle {
  font-size: var(--text-sm);
  color: var(--color-text-subtle);
  font-style: italic;
}

/* Responsive */
@media (max-width: 1024px) {
  .origin-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .origin-text {
    order: 2;
  }

  .origin-image {
    order: 1;
  }

  .image-wrapper {
    max-width: 320px;
  }
}

@media (max-width: 768px) {
  .origin-section {
    padding: var(--space-16) 0;
  }

  .section-title {
    font-size: 2rem;
  }

  .origin-description {
    font-size: var(--text-lg);
  }

  .origin-stats {
    gap: var(--space-2);
  }

  .stat-number {
    font-size: var(--text-2xl);
  }
}
</style>
