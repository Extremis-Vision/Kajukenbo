<template>
  <div class="actualites-page">
    <!-- Featured News (First Item) -->
    <FeaturedNews :newsItem="featuredItem" v-if="featuredItem" />

    <!-- News Grid (Other Items) -->
    <NewsGrid :newsItems="gridItems" />
  </div>
</template>

<script setup lang="ts">
import FeaturedNews from '~/components/actualites/FeaturedNews.vue'
import NewsGrid from '~/components/actualites/NewsGrid.vue'
import { news } from '~/data/news'

// Getting first item as featured
const featuredItem = news[0]
// Getting rest as grid
const gridItems = news.slice(1)

useHead({
  title: 'Actualités | Kajukenbo Alsace',
  meta: [
    { 
      name: 'description', 
      content: 'Découvrez les dernières actualités, stages et événements du club Kajukenbo Alsace.' 
    }
  ]
})
</script>

<style scoped>
.actualites-page {
  padding-top: 80px; /* Navbar height compensation if needed, but Featured is full height mostly */
  /* FeaturedNews handles its own top padding/height */
  padding-top: 0; 
  background-color: var(--color-background);
  min-height: 100vh;
}
</style>
