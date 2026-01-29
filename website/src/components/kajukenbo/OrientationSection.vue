<template>
  <section id="orientation" class="orientation-section">
    <div class="section-bg"></div>
    <div class="container">
      <div class="orientation-content">
        <!-- Visual -->
        <div class="orientation-visual">
          <div class="visual-wrapper">
            <!-- Main Card -->
            <div class="main-card glass">
              <div class="icon-wrapper">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 class="visual-title">Self-Défense</h3>
              <p class="visual-desc">Système de combat de rue</p>
            </div>

            <!-- Orbiting Cards -->
            <div class="orbit-card card-1 glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>Rapide</span>
            </div>
            <div class="orbit-card card-2 glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <span>Efficace</span>
            </div>
            <div class="orbit-card card-3 glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span>Défensif</span>
            </div>
            <div class="orbit-card card-4 glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              <span>Réaliste</span>
            </div>
          </div>
        </div>

        <!-- Text -->
        <div class="orientation-text">
          <div class="section-header">
            <span class="section-subtitle">Orientation</span>
            <h2 class="section-title">
              Conçu pour la <span class="title-accent">Self-Défense</span>
            </h2>
          </div>
          
          <div class="orientation-info">
            <p class="intro-text">
              La vocation du Kajukenbo est purement orientée vers l'efficacité. 
              Mis au point pour le <strong>combat de rue</strong>, c'est un style pragmatique 
              qui répond aux agressions réelles.
            </p>
            
            <div class="features-grid">
              <div class="feature-item">
                <span class="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div class="feature-content">
                  <h4>Réalisme</h4>
                  <p>Situations concrètes</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div class="feature-content">
                  <h4>Efficacité</h4>
                  <p>Réponse immédiate</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div class="feature-content">
                  <h4>Adaptabilité</h4>
                  <p>Toutes distances</p>
                </div>
              </div>
              <div class="feature-item">
                <span class="feature-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <div class="feature-content">
                  <h4>Technique</h4>
                  <p>Multi-disciplinaire</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Orientation Section
</script>

<style scoped>
.orientation-section {
  padding: var(--space-24) 0;
  position: relative;
  overflow: hidden;
}

.section-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 0% 50%, rgba(196, 30, 58, 0.05) 0%, transparent 50%);
}

.orientation-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-20);
  align-items: center;
}

/* Visual */
.orientation-visual {
  display: flex;
  justify-content: center;
}

.visual-wrapper {
  position: relative;
  width: 550px;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-card {
  position: relative;
  z-index: 2;
  width: 220px;
  padding: var(--space-10);
  text-align: center;
  background: rgba(10, 10, 10, 0.8);
  border: 1px solid rgba(196, 30, 58, 0.3);
  border-radius: var(--radius-2xl);
  box-shadow: 0 0 60px rgba(196, 30, 58, 0.15);
}

.icon-wrapper {
  display: inline-flex;
  padding: var(--space-5);
  background: linear-gradient(135deg, var(--color-primary), var(--color-primary-dark));
  border-radius: var(--radius-xl);
  color: white;
  margin-bottom: var(--space-5);
  box-shadow: 0 10px 25px rgba(196, 30, 58, 0.4);
}

.visual-title {
  font-size: var(--text-2xl);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.visual-desc {
  font-size: var(--text-base);
  color: var(--color-text-muted);
}

.orbit-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-4) var(--space-6);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-full);
  color: var(--color-text);
  font-size: var(--text-base);
  font-weight: 600;
  backdrop-filter: blur(12px);
  transition: all var(--transition-base);
  white-space: nowrap;
}

.orbit-card svg {
  color: var(--color-primary);
}

.orbit-card:hover {
  border-color: var(--color-primary);
  background: rgba(196, 30, 58, 0.1);
  transform: scale(1.1);
  z-index: 3;
  box-shadow: 0 0 20px rgba(196, 30, 58, 0.2);
}

/* Positioning further out for larger orbit */
.card-1 { top: 10%; right: 10%; animation: float 6s infinite; }
.card-2 { bottom: 15%; right: 5%; animation: float 6s infinite 1.5s; }
.card-3 { bottom: 10%; left: 5%; animation: float 6s infinite 3s; }
.card-4 { top: 15%; left: 0%; animation: float 6s infinite 4.5s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Text */
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
  margin-bottom: var(--space-10);
  line-height: 1.1;
}

.title-accent {
  color: var(--color-primary);
}

.intro-text {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.8;
  margin-bottom: var(--space-12);
  padding-left: var(--space-8);
  border-left: 2px solid var(--color-primary);
}

.intro-text strong {
  color: var(--color-text);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8) var(--space-6);
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-5);
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(196, 30, 58, 0.1);
  border-radius: 50%;
  color: var(--color-primary);
  flex-shrink: 0;
  transition: all var(--transition-base);
}

.feature-item:hover .feature-icon {
  background: var(--color-primary);
  color: white;
  transform: scale(1.1);
  box-shadow: 0 0 20px rgba(196, 30, 58, 0.4);
}

.feature-content h4 {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.feature-content p {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.6;
}

/* Responsive */
@media (max-width: 1024px) {
  .orientation-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .orientation-visual {
    order: 1;
  }
  
  .orientation-text {
    order: 2;
  }
}

@media (max-width: 768px) {
  .visual-wrapper {
    width: 100%;
    height: 300px;
  }
  
  .main-card {
    width: 160px;
  }

  .card-1 { right: 0; }
  .card-2 { right: -10px; }
  .card-3 { left: -10px; }
  .card-4 { left: 0; }
}
</style>
