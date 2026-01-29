<template>
  <div class="featured-news" v-if="newsItem">
    <div class="featured-bg">
      <img :src="newsItem.image" :alt="newsItem.title" />
      <div class="gradient-overlay"></div>
    </div>
    
    <div class="container featured-content">
      <div class="news-badge">
        <span class="badge-icon">🔥</span>
        {{ newsItem.category }}
      </div>
      <h2 class="featured-title">{{ newsItem.title }}</h2>
      <div class="featured-meta">
        <span class="featured-date">📅 {{ newsItem.date }}</span>
      </div>
      <p class="featured-excerpt">{{ newsItem.excerpt }}</p>
      <button class="btn-read-more">Lire la suite</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NewsItem } from '@/data/news';

defineProps<{
  newsItem: NewsItem
}>()
</script>

<style scoped>
.featured-news {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: flex-end; /* Bottom alignment as usually seen in magazines */
  padding-bottom: var(--space-20);
  background: black;
  overflow: hidden;
  border-bottom: 4px solid var(--color-primary);
}

.featured-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.featured-bg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 10s ease;
}

.featured-news:hover .featured-bg img {
  transform: scale(1.05); /* Slow zoom effect */
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
}

.featured-content {
  position: relative;
  z-index: 2;
  max-width: 900px;
  animation: slideUp 1s ease-out;
}

.news-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--color-primary);
  color: white;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-full);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: var(--text-sm);
  margin-bottom: var(--space-6);
}

.featured-title {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 900;
  color: white;
  line-height: 1.1;
  text-transform: uppercase;
  margin-bottom: var(--space-4);
  text-shadow: 0 4px 10px rgba(0,0,0,0.5);
}

.featured-meta {
  color: rgba(255,255,255,0.7);
  font-size: var(--text-lg);
  margin-bottom: var(--space-6);
  font-weight: 500;
}

.featured-excerpt {
  color: rgba(255,255,255,0.9);
  font-size: var(--text-xl);
  line-height: 1.6;
  max-width: 800px;
  margin-bottom: var(--space-8);
  border-left: 2px solid var(--color-primary);
  padding-left: var(--space-4);
}

.btn-read-more {
  background: transparent;
  border: 1px solid white;
  color: white;
  padding: var(--space-3) var(--space-8);
  font-size: var(--text-lg);
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-read-more:hover {
  background: white;
  color: black;
  transform: translateY(-5px);
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(50px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
