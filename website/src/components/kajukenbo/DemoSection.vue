<template>
  <section id="demonstrations" class="demo-section">
    <div class="container">
      <div class="section-header center">
        <span class="section-subtitle">Vidéos</span>
        <h2 class="section-title">
          En <span class="title-accent">Action</span>
        </h2>
        <p class="section-desc">Découvrez la puissance et la fluidité du Kajukenbo à travers ces démonstrations.</p>
      </div>

      <!-- Video Carousel -->
      <div class="carousel-container">
        <!-- Navigation Arrows -->
        <button class="nav-arrow nav-prev" @click="prevVideo" :disabled="currentIndex === 0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div class="video-wrapper">
          <div class="video-card glass">
            <div class="video-frame">
              <iframe 
                :src="getEmbedUrl(videos[currentIndex].url)" 
                title="Démonstration Kajukenbo" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            </div>
            <div class="video-info">
              <span v-if="videos[currentIndex].isLocal" class="video-badge">Alsace</span>
              <h3 class="video-title">{{ videos[currentIndex].title }}</h3>
              <span class="video-counter">{{ currentIndex + 1 }} / {{ videos.length }}</span>
            </div>
          </div>
        </div>

        <button class="nav-arrow nav-next" @click="nextVideo" :disabled="currentIndex === videos.length - 1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <!-- Dot Indicators -->
      <div class="carousel-dots">
        <button 
          v-for="(video, index) in videos" 
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToVideo(index)"
          :aria-label="`Aller à la vidéo ${index + 1}`"
        >
          <span class="dot-tooltip">{{ video.title }}</span>
        </button>
      </div>

      <!-- Video Title Bar -->
      <div class="video-titles">
        <button 
          v-for="(video, index) in videos" 
          :key="index"
          class="title-btn"
          :class="{ active: index === currentIndex }"
          @click="goToVideo(index)"
        >
          <span class="title-number">{{ index + 1 }}</span>
          <span class="title-text">{{ video.title }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Video {
  url: string
  title: string
  isLocal?: boolean
}

const videos: Video[] = [
  { url: 'https://www.youtube.com/watch?v=7Q5NYPxtMDA', title: 'Démonstration Technique' },
  { url: 'https://www.youtube.com/watch?v=yvWXOCqGsOE', title: 'Self-Défense Dynamique' },
  { url: 'https://www.youtube.com/watch?v=HSfShr7jbY0', title: 'Fluidité & Puissance' },
  { url: 'https://www.youtube.com/watch?v=WZp5q2WrkfY', title: 'Applications Combat' },
  { url: 'https://www.youtube.com/watch?v=i2ZfECVurPQ', title: 'Démonstration Alsace', isLocal: true }
]

const currentIndex = ref(0)

const getEmbedUrl = (url: string) => {
  const videoId = url.split('v=')[1]
  return `https://www.youtube.com/embed/${videoId}`
}

const prevVideo = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

const nextVideo = () => {
  if (currentIndex.value < videos.length - 1) {
    currentIndex.value++
  }
}

const goToVideo = (index: number) => {
  currentIndex.value = index
}
</script>

<style scoped>
.demo-section {
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
}

.section-header.center {
  text-align: center;
  margin-bottom: var(--space-12);
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

/* Carousel Container */
.carousel-container {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: 900px;
  margin: 0 auto var(--space-8);
}

/* Navigation Arrows */
.nav-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: var(--color-text);
  cursor: pointer;
  transition: all var(--transition-base);
  flex-shrink: 0;
}

.nav-arrow:hover:not(:disabled) {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: scale(1.1);
}

.nav-arrow:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Video Wrapper */
.video-wrapper {
  flex: 1;
  min-width: 0;
}

.video-card {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all var(--transition-base);
}

.video-frame {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
}

.video-frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-info {
  padding: var(--space-5) var(--space-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
}

.video-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
  flex: 1;
}

.video-counter {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 500;
}

.video-badge {
  font-size: var(--text-xs);
  font-weight: 700;
  color: white;
  background: var(--color-primary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
}

/* Dot Indicators */
.carousel-dots {
  display: flex;
  justify-content: center;
  gap: var(--space-3);
  margin-bottom: var(--space-8);
}

.dot {
  position: relative;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid transparent;
  cursor: pointer;
  transition: all var(--transition-base);
}

.dot:hover {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.2);
}

.dot.active {
  background: var(--color-primary);
  border-color: white;
  transform: scale(1.3);
  box-shadow: 0 0 15px rgba(196, 30, 58, 0.5);
}

.dot-tooltip {
  position: absolute;
  bottom: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(10, 10, 10, 0.95);
  color: white;
  padding: var(--space-2) var(--space-4);
  border-radius: var(--radius-md);
  white-space: nowrap;
  font-size: var(--text-xs);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-base);
}

.dot:hover .dot-tooltip {
  opacity: 1;
}

/* Video Title Buttons */
.video-titles {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: var(--space-3);
  max-width: 900px;
  margin: 0 auto;
}

.title-btn {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-5);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-lg);
  color: var(--color-text-muted);
  cursor: pointer;
  transition: all var(--transition-base);
  font-size: var(--text-sm);
}

.title-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.15);
  color: var(--color-text);
}

.title-btn.active {
  background: rgba(196, 30, 58, 0.15);
  border-color: var(--color-primary);
  color: var(--color-text);
}

.title-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  font-weight: 700;
  font-size: var(--text-xs);
}

.title-btn.active .title-number {
  background: var(--color-primary);
  color: white;
}

.title-text {
  font-weight: 500;
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-container {
    gap: var(--space-3);
  }

  .nav-arrow {
    width: 44px;
    height: 44px;
  }

  .nav-arrow svg {
    width: 20px;
    height: 20px;
  }

  .video-titles {
    display: none;
  }
}
</style>
