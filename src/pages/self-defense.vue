<template>
  <div class="self-defense-page">
    <SelfIntroSection />
    <SelfTargetSection />
    <SelfMethodSection />
    <SelfLocationSection />
  </div>
</template>

<script setup lang="ts">
import SelfIntroSection from '~/components/self-defense/SelfIntroSection.vue'
import SelfTargetSection from '~/components/self-defense/SelfTargetSection.vue'
import SelfMethodSection from '~/components/self-defense/SelfMethodSection.vue'
import SelfLocationSection from '~/components/self-defense/SelfLocationSection.vue'

useHead({
  title: 'Self-Défense en Alsace | Sundgau Self-Défense',
  meta: [
    { 
      name: 'description', 
      content: 'Cours de Self-Défense accessibles à tous à Altkirch. Apprenez des techniques simples et efficaces pour votre sécurité.' 
    }
  ]
})
</script>

<style scoped>

.self-defense-page {
  /* Light Theme Variables */
  --color-background: #F9F9F9;
  --color-text: #1A1A1A;
  --color-text-muted: #555555;
  
  /* Sundgau Theme Colors */
  --color-primary: #1A237E; /* Deep Blue from Logo */
  --color-primary-dark: #000051;
  
  /* Accent Blue from Logo/Badge if needed, or Dark Navy */
  --self-navy: #0A1128; 
  
  background-color: var(--color-background);
  min-height: 100vh;
  color: var(--color-text);
}

:deep(.title-accent) {
  background: linear-gradient(135deg, var(--color-primary), #C41E3A); /* Blue to Red */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

:deep(.glass) {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

:deep(.glass:hover) {
  background: rgba(255, 255, 255, 0.9);
  border-color: var(--color-primary);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}
</style>
