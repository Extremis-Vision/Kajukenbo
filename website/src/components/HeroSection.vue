<template>
  <section class="hero">
    <!-- Background Effects -->
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-pattern"></div>
    </div>

    <!-- Content -->
    <div class="hero-content">
      <!-- Emblem (simple ring) -->
      <div class="hero-emblem">
        <div class="emblem-ring"></div>
        <div class="emblem-ring-inner"></div>
      </div>

      <!-- Title -->
      <h1 class="hero-title">
        <span class="title-main">KAJUKENBO</span>
        <span class="title-sub">ALSACE</span>
      </h1>

      <!-- Tagline -->
      <p class="hero-tagline">L'Art de l'Autodéfense</p>

      <!-- Description -->
      <p class="hero-description">
        Fusion parfaite de <strong>Karate • Judo • Jujutsu • Kenpo • Boxe Chinoise</strong>
      </p>

      <!-- CTA Buttons -->
      <div class="hero-cta">
        <a href="#objectifs" class="btn btn-primary">
          <span>Découvrir</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
        <NuxtLink to="/contact" class="btn btn-outline">Nous contacter</NuxtLink>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-line"></div>
      <span class="scroll-text">Scroll</span>
    </div>
  </section>
</template>

<script setup lang="ts">
// Hero section component
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Background Effects */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(196, 30, 58, 0.15) 0%, transparent 60%);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(196, 30, 58, 0.08) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(196, 30, 58, 0.05) 0%, transparent 30%);
}

/* Content */
.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: var(--space-8);
  max-width: 900px;
}

/* Emblem */
.hero-emblem {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  margin-bottom: var(--space-8);
}

.emblem-ring {
  position: absolute;
  inset: 0;
  border: 3px solid var(--color-primary);
  border-radius: 50%;
  animation: pulse-ring 3s ease-in-out infinite;
}

.emblem-ring-inner {
  position: absolute;
  inset: 15px;
  border: 2px solid rgba(196, 30, 58, 0.5);
  border-radius: 50%;
  animation: pulse-ring 3s ease-in-out infinite 0.5s;
}

@keyframes pulse-ring {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.7; }
}

/* Title */
.hero-title {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.title-main {
  font-size: clamp(3rem, 12vw, 8rem);
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--color-text);
  line-height: 1;
  text-shadow: 0 0 60px rgba(196, 30, 58, 0.3);
}

.title-sub {
  font-size: clamp(1.5rem, 5vw, 3rem);
  font-weight: 300;
  letter-spacing: 0.5em;
  color: var(--color-primary);
}

/* Tagline */
.hero-tagline {
  font-family: var(--font-display);
  font-size: var(--text-2xl);
  color: var(--color-text-muted);
  font-style: italic;
  margin-bottom: var(--space-4);
}

/* Description */
.hero-description {
  font-size: var(--text-lg);
  color: var(--color-text-subtle);
  margin-bottom: var(--space-10);
}

.hero-description strong {
  color: var(--color-text-muted);
  font-weight: 500;
}

/* CTA Buttons */
.hero-cta {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
  flex-wrap: wrap;
}

.hero-cta .btn {
  min-width: 180px;
}

.hero-cta .btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

.hero-cta .btn-primary svg {
  transition: transform var(--transition-base);
}

.hero-cta .btn-primary:hover svg {
  transform: translateY(4px);
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: var(--space-8);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--color-primary), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.3; transform: scaleY(0.8); }
  50% { opacity: 1; transform: scaleY(1); }
}

.scroll-text {
  font-size: var(--text-xs);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-text-subtle);
}

/* Japanese Decoration */
.japanese-decoration {
  position: absolute;
  right: var(--space-8);
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.japanese-decoration span {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  color: rgba(255, 255, 255, 0.05);
  writing-mode: vertical-rl;
  text-orientation: upright;
}

/* Responsive */
@media (max-width: 1024px) {
  .japanese-decoration {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero-emblem {
    width: 90px;
    height: 90px;
  }

  .emblem-kanji {
    font-size: 3rem;
  }

  .hero-tagline {
    font-size: var(--text-xl);
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .hero-cta .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>
