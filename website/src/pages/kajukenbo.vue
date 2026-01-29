<template>
  <div class="page-kajukenbo">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg"></div>
      <div class="hero-particles">
        <span v-for="n in 6" :key="n" class="particle"></span>
      </div>
      <div class="hero-lines">
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="container hero-content">
        <h1 class="page-title">
          <span class="title-letter" v-for="(letter, i) in 'KAJUKENBO'" :key="i" :style="{ animationDelay: `${i * 0.1}s` }">{{ letter }}</span>
        </h1>
        <p class="page-subtitle">L'Art Martial Hawaïen</p>
        <div class="hero-tags">
          <span class="tag">Karaté</span>
          <span class="tag">Judo</span>
          <span class="tag">Kenpo</span>
          <span class="tag">Boxe Chinoise</span>
        </div>
      </div>
      <div class="scroll-indicator">
        <span class="scroll-line"></span>
      </div>
    </section>

    <!-- Origin Section -->
    <OriginSection />

    <!-- Disciplines Section -->
    <DisciplinesSection />

    <!-- Orientation Section -->
    <OrientationSection />

    <!-- Objectif Section -->
    <ObjectifSection />

    <!-- Representation Section -->
    <RepresentationSection />

    <!-- Instructeur Section -->
    <InstructeurSection />

    <!-- Demo Section -->
    <DemoSection />

    <!-- Fonctionnement Section -->
    <FonctionnementSection />

    <!-- Ceintures Section -->
    <CeinturesSection />
  </div>
</template>

<script setup lang="ts">
import OriginSection from '~/components/kajukenbo/OriginSection.vue'
import DisciplinesSection from '~/components/kajukenbo/DisciplinesSection.vue'
import OrientationSection from '~/components/kajukenbo/OrientationSection.vue'
import ObjectifSection from '~/components/kajukenbo/ObjectifSection.vue'
import RepresentationSection from '~/components/kajukenbo/RepresentationSection.vue'
import InstructeurSection from '~/components/kajukenbo/InstructeurSection.vue'
import DemoSection from '~/components/kajukenbo/DemoSection.vue'
import FonctionnementSection from '~/components/kajukenbo/FonctionnementSection.vue'
import CeinturesSection from '~/components/kajukenbo/CeinturesSection.vue'

useHead({
  title: 'Kajukenbo - L\'Art Martial Hawaïen | Kajukenbo Alsace',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez le Kajukenbo, art martial né à Hawaï en 1947, combinant Karaté, Judo, Jujutsu, Kenpo et Boxe Chinoise.' 
    }
  ]
})
</script>

<style scoped>
.page-kajukenbo {
  position: relative;
}

/* Page Hero */
.page-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse 100% 80% at 50% 0%, rgba(196, 30, 58, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 20% 80%, rgba(196, 30, 58, 0.1) 0%, transparent 30%),
    radial-gradient(circle at 80% 20%, rgba(196, 30, 58, 0.08) 0%, transparent 25%);
}

/* Particles */
.hero-particles {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: var(--color-primary);
  border-radius: 50%;
  opacity: 0.3;
  animation: float-particle 15s infinite;
}

.particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
.particle:nth-child(2) { left: 20%; top: 60%; animation-delay: -3s; }
.particle:nth-child(3) { left: 60%; top: 30%; animation-delay: -6s; }
.particle:nth-child(4) { left: 80%; top: 70%; animation-delay: -9s; }
.particle:nth-child(5) { left: 40%; top: 80%; animation-delay: -12s; }
.particle:nth-child(6) { left: 90%; top: 40%; animation-delay: -2s; }

@keyframes float-particle {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
  50% { transform: translateY(-30px) scale(1.5); opacity: 0.6; }
}

/* Lines */
.hero-lines {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}

.line {
  position: absolute;
  width: 1px;
  height: 150px;
  background: linear-gradient(180deg, transparent, var(--color-primary), transparent);
  opacity: 0.2;
}

.line:first-child {
  left: 15%;
  top: 10%;
  animation: line-float 8s ease-in-out infinite;
}

.line:last-child {
  right: 15%;
  bottom: 10%;
  animation: line-float 8s ease-in-out infinite reverse;
}

@keyframes line-float {
  0%, 100% { transform: translateY(0) rotate(15deg); }
  50% { transform: translateY(20px) rotate(-15deg); }
}

/* Hero Content */
.hero-content {
  position: relative;
  z-index: 10;
  text-align: center;
}

.hero-badge {
  display: inline-block;
  margin-bottom: var(--space-6);
  padding: var(--space-2) var(--space-5);
  background: rgba(196, 30, 58, 0.15);
  border: 1px solid rgba(196, 30, 58, 0.3);
  border-radius: var(--radius-full);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  animation: fadeInUp 0.8s ease;
}

.page-title {
  font-size: clamp(4rem, 15vw, 10rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  margin-bottom: var(--space-4);
  line-height: 1;
}

.title-letter {
  display: inline-block;
  color: var(--color-primary);
  animation: letterPop 0.6s ease backwards;
  text-shadow: 
    0 0 40px rgba(196, 30, 58, 0.5),
    0 0 80px rgba(196, 30, 58, 0.3);
}

@keyframes letterPop {
  0% { opacity: 0; transform: translateY(50px) scale(0.5); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.page-subtitle {
  font-size: var(--text-2xl);
  color: var(--color-text-muted);
  font-style: italic;
  font-weight: 300;
  margin-bottom: var(--space-8);
  animation: fadeInUp 0.8s ease 0.5s backwards;
}

.hero-tags {
  display: flex;
  justify-content: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  animation: fadeInUp 0.8s ease 0.7s backwards;
}

.tag {
  padding: var(--space-2) var(--space-4);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  color: var(--color-text-subtle);
  transition: all var(--transition-base);
}

.tag:hover {
  background: rgba(196, 30, 58, 0.1);
  border-color: var(--color-primary);
  color: var(--color-text);
}

@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
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
  gap: var(--space-2);
}

.scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(180deg, var(--color-primary), transparent);
  animation: scroll-pulse 2s ease-in-out infinite;
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 1; transform: scaleY(1); }
  50% { opacity: 0.5; transform: scaleY(0.7); }
}

/* Responsive */
@media (max-width: 768px) {
  .page-title {
    font-size: clamp(2.5rem, 12vw, 5rem);
  }

  .page-subtitle {
    font-size: var(--text-lg);
  }

  .hero-tags {
    gap: var(--space-2);
  }

  .tag {
    font-size: var(--text-xs);
    padding: var(--space-1) var(--space-3);
  }
}
</style>
