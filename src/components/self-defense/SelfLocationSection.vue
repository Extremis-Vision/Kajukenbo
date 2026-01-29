<template>
  <section id="infos" class="self-location-section">
    <div class="section-bg"></div>
    <div class="container">
      <div class="location-content">
        <div class="section-header center">
          <span class="section-subtitle">Pratique</span>
          <h2 class="section-title">Infos <span class="title-accent">Utiles</span></h2>
        </div>

        <div class="info-card glass">
          <div class="info-row">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <div class="info-details">
              <h3>Créneaux</h3>
              <p>Chaque <strong>Mercredi</strong></p>
              <p class="highlight">18h30 - 19h45</p>
            </div>
          </div>

          <div class="divider"></div>

          <div class="info-row">
            <div class="icon-circle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="info-details">
              <h3>Lieu</h3>
              <p><strong>Cosec d'Altkirch</strong></p>
              <p class="highlight">Salle de Judo</p>
            </div>
          </div>
        </div>

        <div class="map-actions">
          <span class="actions-label">Y aller avec :</span>
          <div class="buttons-row">
            <a href="https://www.google.com/maps/search/?api=1&query=Cosec+Altkirch" target="_blank" class="map-btn google">
              <span class="btn-icon">G</span>
              <span>Google Maps</span>
            </a>
            <a href="https://waze.com/ul?q=Cosec+Altkirch" target="_blank" class="map-btn waze">
              <span class="btn-icon">W</span>
              <span>Waze</span>
            </a>
            <a href="http://maps.apple.com/?q=Cosec+Altkirch" target="_blank" class="map-btn apple">
              <span class="btn-icon"></span>
              <span>Apple Maps</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.self-location-section {
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
  margin-bottom: var(--space-20);
}

.section-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 100%, rgba(196, 30, 58, 0.1) 0%, transparent 60%);
}

.location-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 800;
  color: var(--color-text);
  line-height: 1.1;
}

.title-accent {
  color: var(--color-primary);
}

.info-card {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: var(--space-10);
  /* background managed by glass class */
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-2xl);
  margin-bottom: var(--space-12);
  /* backdrop-filter managed by glass class */
}

.info-row {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-4);
}

.icon-circle {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: 50%;
  color: white;
  box-shadow: 0 10px 20px rgba(196, 30, 58, 0.3);
}

.info-details h3 {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.info-details p {
  font-size: var(--text-xl);
  color: var(--color-text);
}

.highlight {
  color: var(--color-primary);
  font-weight: 700;
}

.divider {
  width: 1px;
  height: 100px;
  background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.1), transparent);
}

.map-actions {
  text-align: center;
}

.actions-label {
  display: block;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  margin-bottom: var(--space-4);
}

.buttons-row {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  flex-wrap: wrap;
}

.map-btn {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-6);
  background: white;
  color: black;
  border-radius: var(--radius-full);
  font-weight: 600;
  text-decoration: none;
  transition: all var(--transition-base);
}

.map-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
}

.map-btn.waze {
  background: #33ccff;
  color: white;
}

.map-btn.waze:hover {
  box-shadow: 0 5px 15px rgba(51, 204, 255, 0.4);
}

.map-btn.apple {
  background: #000000;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.map-btn.apple:hover {
  box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .info-card {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
}
</style>
