<template>
  <section id="certification" class="certification-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-label">Reconnaissance Officielle</span>
        <h2 class="section-title">
          Club <span class="title-accent">Certifié</span>
        </h2>
        <p class="section-subtitle">
          Membre officiel du réseau <strong>KSDIF</strong> - Kajukenbo Self Defense Institute France
        </p>
      </div>

      <!-- Content -->
      <div class="certification-content">
        <!-- France Map Section -->
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

        <!-- International Section -->
        <div class="international-section">
          <h3 class="map-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Réseau International Francophone
          </h3>
          
          <div class="international-clubs">
            <a 
              v-for="club in internationalClubs" 
              :key="club.name"
              :href="club.link"
              target="_blank"
              class="international-card glass"
            >
              <span class="country-flag">{{ club.flag }}</span>
              <div class="country-info">
                <span class="country-name">{{ club.name }}</span>
                <span class="country-city">{{ club.city }}</span>
              </div>
              <svg class="club-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="certification-cta">
        <a href="https://www.kajukenbo.fr/" target="_blank" class="btn btn-primary">
          Visiter KSDIF France
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
          </svg>
        </a>
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

interface InternationalClub {
  name: string
  city: string
  flag: string
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

const internationalClubs: InternationalClub[] = [
  { name: 'Suisse', city: 'Genève', flag: '🇨🇭', link: 'https://www.kajukenbo.fr/en/kajukenbo-suisse' },
  { name: 'Koweït', city: 'Koweït City', flag: '🇰🇼', link: 'https://www.kajukenbo.fr/en/kajukenbo-koweit' }
]

const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.certification-section {
  padding: var(--space-24) 0;
  position: relative;
  background: linear-gradient(180deg, transparent 0%, rgba(196, 30, 58, 0.03) 50%, transparent 100%);
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.section-label {
  display: inline-block;
  font-size: var(--text-sm);
  font-weight: 600;
  color: var(--color-primary);
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: var(--space-3);
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.title-accent {
  color: var(--color-primary);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
}

.section-subtitle strong {
  color: var(--color-primary);
}

/* Content */
.certification-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-12);
}

/* Map Section */
.map-section,
.international-section {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.map-title {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-xl);
  font-weight: 600;
  color: var(--color-text);
}

.map-title svg {
  color: var(--color-primary);
}

/* France Map */
.map-container {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  overflow: hidden;
  height: 500px; /* Force height for larger map */
  display: flex;
  align-items: center;
  justify-content: center;
}

.france-map {
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 600px; /* Agrandissement */
  margin: 0 auto;
}

.france-map img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0.8;
  filter: invert(1) drop-shadow(0 0 2px rgba(255,255,255,0.3));
}

/* Club Markers */
.club-marker {
  position: absolute;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 10;
}

.marker-dot {
  width: 14px;
  height: 14px;
  background: var(--color-primary);
  border: 2px solid var(--color-text);
  border-radius: 50%;
  transition: all var(--transition-base);
  box-shadow: 0 0 20px rgba(196, 30, 58, 0.5);
}

.club-marker:hover .marker-dot {
  transform: scale(1.3);
  box-shadow: 0 0 30px rgba(196, 30, 58, 0.8);
}

.marker-label {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: var(--space-1);
  display: flex;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.club-marker:hover .marker-label {
  opacity: 1;
}

.marker-name {
  font-size: var(--text-xs);
  font-weight: 600;
  color: var(--color-text);
  background: rgba(0, 0, 0, 0.8);
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
}

.marker-count {
  font-size: var(--text-xs);
  color: var(--color-primary);
}

/* Clubs List */
.clubs-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-2);
}

.club-card {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-4);
  text-decoration: none;
  color: var(--color-text);
  transition: all var(--transition-base);
}

.club-card:hover {
  background: rgba(196, 30, 58, 0.1);
  border-color: var(--color-primary);
}

.club-icon {
  font-size: var(--text-sm);
}

.club-name {
  flex: 1;
  font-size: var(--text-sm);
  font-weight: 500;
}

.club-count {
  font-size: var(--text-xs);
  color: var(--color-text-subtle);
}

.club-arrow {
  color: var(--color-text-subtle);
  transition: all var(--transition-base);
}

.club-card:hover .club-arrow {
  color: var(--color-primary);
  transform: translate(2px, -2px);
}

/* International Clubs */
.international-clubs {
  display: flex;
  flex-direction: column;
  gap: var(--space-6); /* Plus d'espace (était 3) */
}

.international-card {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6) var(--space-8); /* Plus de padding */
  text-decoration: none;
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 50px; /* Pill / High radius */
  transition: all var(--transition-base);
}

.international-card:hover {
  background: rgba(196, 30, 58, 0.1);
  border-color: var(--color-primary);
  transform: translateX(10px);
}

.country-flag {
  font-size: var(--text-3xl);
}

.country-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.country-name {
  font-size: var(--text-lg);
  font-weight: 600;
}

.country-city {
  font-size: var(--text-sm);
  color: var(--color-text-subtle);
}

/* CTA */
.certification-cta {
  text-align: center;
}

.certification-cta .btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
}

/* Responsive */
@media (max-width: 1024px) {
  .certification-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .certification-section {
    padding: var(--space-16) 0;
  }

  .clubs-list {
    grid-template-columns: 1fr;
  }
}
</style>
