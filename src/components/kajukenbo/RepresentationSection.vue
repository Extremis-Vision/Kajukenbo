<template>
  <section id="representation" class="representation-section">
    <div class="container">
      <div class="representation-content">
        <!-- Text Content -->
        <div class="representation-text">
          <div class="section-header">
            <span class="section-subtitle">Représentation</span>
            <h2 class="section-title">
              Le Kajukenbo en <span class="title-accent">France</span>
            </h2>
          </div>

          <div class="info-card glass">
            <h3 class="info-title">Direction Technique</h3>
            <p class="info-text">
              Le style est représenté officiellement par <strong>Luis et Joe DIAZ</strong>, 
              <span class="text-accent">Sigung 7e Degré</span>.
            </p>
            <p class="info-subtext">
              Directeurs techniques Kajukenbo Tribal Spirit et Kajukenbo Self Defense Institut France (KSDIF).
              Représentants officiels de la KSDI mondiale.
            </p>
          </div>

          <a href="https://www.kajukenbo.fr/en/qui-somme-nous" target="_blank" rel="noopener" class="official-link">
            <span>Visiter le site officiel KSDI</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>

        <!-- Map Section -->
        <div class="map-section">
          <h3 class="map-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Clubs en France
          </h3>
          
          <div class="map-container">
            <!-- France Map with Markers -->
            <div class="france-map">
              <img :src="franceMapUrl" alt="Carte de France des clubs Kajukenbo" />
              
              <!-- Club Markers -->
              <div 
                v-for="club in franceclubs" 
                :key="club.name"
                class="club-marker"
                :style="{ top: club.top, left: club.left }"
                @click="openLink(club.link)"
              >
                <div class="marker-dot"></div>
                <div class="marker-label">
                  <span class="marker-name">{{ club.name }}</span>
                  <span class="marker-count" v-if="club.count && club.count > 1">{{ club.count }} clubs</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Club List -->
          <div class="clubs-list">
            <a 
              v-for="club in franceclubs" 
              :key="club.name"
              :href="club.link"
              target="_blank"
              class="club-card glass"
            >
              <span class="club-icon">📍</span>
              <span class="club-name">{{ club.name }}</span>
              <span class="club-count" v-if="club.count && club.count > 1">({{ club.count }})</span>
              <svg class="club-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import franceMapUrl from '~/assets/images/france.svg'

interface Club {
  name: string
  count?: number
  top: string
  left: string
  link: string
}

const franceclubs: Club[] = [
  { name: 'Paris', count: 5, top: '26%', left: '52%', link: 'https://www.kajukenbo.fr/en/kajukenbo-paris' },
  { name: 'Lyon', count: 1, top: '60%', left: '62%', link: 'https://www.kajukenbo.fr/en/kajukenbo-lyon' },
  { name: 'Bordeaux', count: 1, top: '68%', left: '38%', link: 'https://www.kajukenbo.fr/en/kajukenbo-bordeaux' },
  { name: 'Haute-Savoie', count: 1, top: '56%', left: '68%', link: 'https://www.kajukenbo.fr/en/kajukenbo-haute-savoie' },
  { name: 'Salaunes', count: 1, top: '66%', left: '36%', link: 'https://www.kajukenbo.fr/en/kajukenbo-salaunes' },
  { name: 'Altkirch', count: 1, top: '42%', left: '74%', link: 'https://www.kajukenbo.fr/en/kajukenbo-altkirch' }
]

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.representation-section {
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
}

.representation-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

/* Text Content */
.representation-text {
  order: 1;
}

.section-header {
  margin-bottom: var(--space-10);
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
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.1;
}

.title-accent {
  color: var(--color-primary);
}

/* Info Card */
.info-card {
  padding: var(--space-8);
  margin-bottom: var(--space-8);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
}

.info-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.info-text {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-4);
}

.info-text strong {
  color: var(--color-text);
}

.text-accent {
  color: var(--color-primary);
  font-weight: 600;
}

.info-subtext {
  font-size: var(--text-sm);
  color: var(--color-text-subtle);
  line-height: 1.6;
}

/* Official Link */
.official-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-base);
}

.official-link:hover {
  background: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

/* Map Section */
.map-section {
  order: 2;
}

.map-title {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-6);
}

.map-title svg {
  color: var(--color-primary);
}

/* Map Container */
.map-container {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  margin-bottom: var(--space-6);
}

.france-map {
  position: relative;
  aspect-ratio: 1;
  max-width: 500px;
  margin: 0 auto;
}

.france-map img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.6;
  filter: brightness(1.2) invert(1);
}

/* Club Markers */
.club-marker {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  transform: translate(-50%, -50%);
}

.marker-dot {
  width: 16px;
  height: 16px;
  background: var(--color-primary);
  border: 2px solid white;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(196, 30, 58, 0.5);
  transition: all var(--transition-base);
}

.club-marker:hover .marker-dot {
  transform: scale(1.3);
  box-shadow: 0 0 20px rgba(196, 30, 58, 0.8);
}

.marker-label {
  position: absolute;
  left: 50%;
  top: calc(100% + 8px);
  transform: translateX(-50%);
  background: rgba(10, 10, 10, 0.9);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  white-space: nowrap;
  opacity: 0;
  transition: opacity var(--transition-base);
  pointer-events: none;
}

.club-marker:hover .marker-label {
  opacity: 1;
}

.marker-name {
  font-size: var(--text-sm);
  font-weight: 600;
  color: white;
}

.marker-count {
  font-size: var(--text-xs);
  color: var(--color-primary);
  margin-left: var(--space-2);
}

/* Clubs List */
.clubs-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.club-card {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-5);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  text-decoration: none;
  color: var(--color-text);
  transition: all var(--transition-base);
}

.club-card:hover {
  background: rgba(196, 30, 58, 0.1);
  border-color: var(--color-primary);
  transform: translateX(5px);
}

.club-icon {
  font-size: var(--text-lg);
}

.club-name {
  flex: 1;
  font-weight: 600;
}

.club-count {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

.club-arrow {
  color: var(--color-text-muted);
  transition: all var(--transition-base);
}

.club-card:hover .club-arrow {
  color: var(--color-primary);
  transform: translate(3px, -3px);
}

/* Responsive */
@media (max-width: 1024px) {
  .representation-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .representation-text {
    order: 2;
  }

  .map-section {
    order: 1;
  }
}

@media (max-width: 768px) {
  .representation-section {
    padding: var(--space-16) 0;
  }

  .clubs-list {
    grid-template-columns: 1fr;
  }
}
</style>
