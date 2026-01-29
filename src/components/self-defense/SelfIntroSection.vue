<template>
  <section class="self-intro-section">
    <div class="section-bg"></div>
    <div class="container">
      <div class="intro-content">
        <!-- Logo Visual -->
        <div class="logo-wrapper">
          <div class="logo-glow"></div>
          <img :src="selfLogo" alt="Sundgau Self-Defense Logo" class="self-logo" />
        </div>

        <!-- Text Content -->
        <div class="intro-text">
          <span class="section-subtitle">Association Kajukenbo Alsace</span>
          <h1 class="main-title">
            <span class="text-white">Sundgau</span>
            <span class="text-gradient">Self-Défense</span>
          </h1>
          
          <div class="definition-card glass">
            <h2 class="definition-title">C'est quoi ?</h2>
            <p class="definition-text">
              La section <strong>« SUNDGAU SELF-DEFENSE »</strong> de l’association 
              <strong>« KAJUKENBO ALSACE »</strong> propose un cours de Self-Défense 
              dédié à l'efficacité et à la simplicité.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import selfLogo from '~/assets/images/self-logo.png'
</script>

<style scoped>
.self-intro-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: var(--space-20) 0;
}

.section-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 50%, rgba(26, 35, 126, 0.05) 0%, transparent 50%); /* Blue hint */
  z-index: 0;
}

.intro-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-20);
  align-items: center;
}

.logo-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  animation: float 6s ease-in-out infinite;
}

.logo-glow {
  position: absolute;
  inset: -20%;
  background: radial-gradient(circle, rgba(26, 35, 126, 0.2) 0%, transparent 70%); /* Blue Glow */
  filter: blur(40px);
  z-index: -1;
}

.self-logo {
  width: 100%;
  max-width: 450px;
  height: auto;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5));
}

.intro-text {
  text-align: left;
}

.section-subtitle {
  display: block;
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
  animation: slideRight 1s ease-out;
}

.main-title {
  display: flex;
  flex-direction: column;
  font-size: clamp(3rem, 6vw, 5rem);
  font-weight: 900;
  line-height: 1;
  margin-bottom: var(--space-10);
  animation: slideUp 1s ease-out 0.2s backwards;
}

.text-white {
  color: var(--color-text);
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-primary), #C41E3A); /* Blue to Red */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.definition-card {
  padding: var(--space-8);
  background: rgba(255, 255, 255, 0.03);
  border-left: 4px solid var(--color-primary);
  border-radius: 0 var(--radius-xl) var(--radius-xl) 0;
  animation: slideUp 1s ease-out 0.4s backwards;
}

.definition-title {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-4);
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

.definition-title::before {
  content: '';
  display: block;
  width: 30px;
  height: 3px;
  background: var(--color-primary);
}

.definition-text {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.definition-text strong {
  color: white;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

@keyframes slideRight {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 1024px) {
  .intro-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .intro-text {
    order: 2;
    text-align: center;
  }

  .logo-wrapper {
    order: 1;
  }
  
  .definition-card {
    text-align: left;
  }
  
  .definition-title {
    justify-content: center; /* Center title if desired, but left aligned definition usually better */
    justify-content: flex-start;
  }
}
</style>
