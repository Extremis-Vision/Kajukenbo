<template>
  <div class="page-home">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Objectifs Section -->
    <ObjectifsSection />

    <!-- Certification Section -->
    <CertificationSection />

    <!-- About Section -->
    <AboutSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Kajukenbo Alsace - L\'Art de l\'Autodéfense',
  meta: [
    { 
      name: 'description', 
      content: 'Kajukenbo Alsace - Club d\'arts martiaux. Découvrez l\'art martial né à Hawaï combinant Karaté, Judo, Jujutsu, Kenpo et Boxe chinoise.' 
    }
  ]
})
</script>

<style scoped>
.page-home {
  position: relative;
  overflow-x: hidden;
}
</style>
