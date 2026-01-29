<template>
  <div class="news-grid-section">
    <div class="container">
      <h3 class="section-label">Dernières Actualités</h3>
      <div class="news-grid">
        <article v-for="item in newsItems" :key="item.id" class="news-card glass">
          <div class="card-image">
            <img :src="item.image" :alt="item.title" />
            <span class="card-category">{{ item.category }}</span>
          </div>
          <div class="card-content">
            <div class="card-meta">
              <span>{{ item.date }}</span>
            </div>
            <h4 class="card-title">{{ item.title }}</h4>
            <p class="card-excerpt">{{ item.excerpt }}</p>
            <button class="card-link">Lire l'article →</button>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsItem } from '@/data/news';

defineProps<{
  newsItems: NewsItem[]
}>()
</script>

<style scoped>
.news-grid-section {
  padding: var(--space-20) 0;
  background-color: var(--color-background);
}

.section-label {
  font-size: var(--text-2xl);
  font-weight: 800;
  margin-bottom: var(--space-10);
  border-left: 4px solid var(--color-primary);
  padding-left: var(--space-4);
  color: var(--color-text);
  text-transform: uppercase;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--space-10);
}

.news-card {
  background: var(--surface-light);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
  border: 1px solid rgba(255,255,255,0.05);
  display: flex;
  flex-direction: column;
}

.news-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  border-color: var(--color-primary);
}

.card-image {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.news-card:hover .card-image img {
  transform: scale(1.1);
}

.card-category {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  background: rgba(0,0,0,0.7);
  color: white;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  backdrop-filter: blur(4px);
}

.card-content {
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-meta {
  color: var(--color-text-muted);
  font-size: var(--text-sm);
  margin-bottom: var(--space-2);
}

.card-title {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-3);
  line-height: 1.3;
}

.card-excerpt {
  color: var(--color-text-muted);
  font-size: var(--text-base);
  margin-bottom: var(--space-6);
  line-height: 1.6;
  flex: 1;
}

.card-link {
  background: none;
  border: none;
  padding: 0;
  color: var(--color-primary);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  text-align: left;
  transition: transform 0.2s;
}

.card-link:hover {
  transform: translateX(5px);
}
</style>
