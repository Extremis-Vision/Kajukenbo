<template>
  <section id="ceintures" class="ceintures-section">
    <div class="container">
      <div class="section-header center">
        <span class="section-subtitle">Progression</span>
        <h2 class="section-title">
          Le Système de <span class="title-accent">Ceintures</span>
        </h2>
        <p class="section-desc">L'échelle de progression du pratiquant de Kajukenbo, symbolisant l'évolution technique et mentale.</p>
      </div>

      <div class="belts-ladder">
        <div 
          v-for="(belt, index) in belts" 
          :key="index"
          class="belt-item glass"
          :class="{ 'black-belt': belt.color === '#000000' }"
        >
          <div class="belt-visual">
            <div class="belt-strap" :style="{ backgroundColor: belt.color }">
              <div class="belt-knot"></div>
            </div>
          </div>
          <div class="belt-info">
            <h3 class="belt-name">{{ belt.name }}</h3>
            <p class="belt-meaning">{{ belt.meaning }}</p>
          </div>
          <div class="belt-rank">{{ index + 1 }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const belts = [
  { name: 'Blanche', color: '#F0F0F0', meaning: 'Le commencement, la pureté de l\'esprit débutant.' },
  { name: 'Jaune', color: '#FFD700', meaning: 'La première lumière, l\'éveil de la connaissance.' },
  { name: 'Orange', color: '#FF8C00', meaning: 'Le soleil montant, le renforcement des acquis.' },
  { name: 'Mauve', color: '#9370DB', meaning: 'La transition, le changement vers des techniques plus avancées.' },
  { name: 'Bleue', color: '#1E90FF', meaning: 'Le ciel, l\'aspiration vers le haut et la fluidité.' },
  { name: 'Verte', color: '#32CD32', meaning: 'La croissance, l\'enracinement des bases solides.' },
  { name: 'Marron', color: '#8B4513', meaning: 'La terre, la maturité technique et mentale.' },
  { name: 'Noire', color: '#000000', meaning: 'L\'expert, le mélange de toutes les couleurs, le nouveau départ.' }
]
</script>

<style scoped>
.ceintures-section {
  padding: var(--space-24) 0;
  position: relative;
  background: linear-gradient(180deg, rgba(20, 20, 20, 1) 0%, rgba(10, 10, 10, 1) 100%);
}

.section-header.center {
  text-align: center;
  margin-bottom: var(--space-16);
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
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--space-6);
  line-height: 1.1;
}

.title-accent {
  background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-desc {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.belts-ladder {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--space-6);
  max-width: 1200px;
  margin: 0 auto;
}

.belt-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--space-6);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
  overflow: hidden;
}

.belt-item:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.belt-visual {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  margin-bottom: var(--space-6);
}

.belt-strap {
  width: 80%;
  height: 24px;
  border-radius: 4px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.belt-knot {
  width: 30px;
  height: 32px;
  background-color: inherit;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.4);
  z-index: 2;
}

.belt-info {
  text-align: center;
  position: relative;
  z-index: 2;
}

.belt-name {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.belt-meaning {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.belt-rank {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  font-size: 3rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.03);
  line-height: 1;
  pointer-events: none;
}

.black-belt .belt-name {
  background: linear-gradient(135deg, #fff, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.black-belt .belt-strap {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
}
</style>
