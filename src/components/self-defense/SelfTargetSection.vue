<template>
  <section id="target" class="self-target-section">
    <div class="container">
      <div class="section-header center">
        <span class="section-subtitle">Public</span>
        <h2 class="section-title">
          Accessible à <span class="title-accent">Tous</span>
        </h2>
      </div>

      <div class="targets-grid">
        <div class="target-card glass fem">
          <div class="target-icon">👩</div>
          <h3>Femmes</h3>
          <p>Confiance en soi & Techniques adaptées sans force.</p>
        </div>
        
        <div class="target-card glass hom">
          <div class="target-icon">👨</div>
          <h3>Hommes</h3>
          <p>Gestion du stress & Réalisme du combat.</p>
        </div>
        
        <div class="target-card glass ado">
          <div class="target-icon">🧒</div>
          <h3>Ados (14+)</h3>
          <p>Discipline, Respect & Sécurité au quotidien.</p>
        </div>
      </div>

      <div class="group-visual">
        <div class="visual-frame">
          <img src="~/assets/images/self-group.jpg" alt="Groupe Self-Défense" />
          <div class="overlay-text">
            <span>Esprit d'équipe</span>
          </div>
        </div>
        <div class="visual-info">
          <div class="info-badge">
            <span class="check">✓</span>
            <span>Débutants bienvenus</span>
          </div>
          <div class="info-badge">
            <span class="check">✓</span>
            <span>Ambiance conviviale</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.self-target-section {
  padding: var(--space-24) 0;
  position: relative;
}

.section-header.center {
  text-align: center;
  margin-bottom: var(--space-16);
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

.targets-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-20);
}

.target-card {
  padding: var(--space-8);
  text-align: center;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
}

.target-card:hover {
  transform: translateY(-10px);
  background: rgba(26, 35, 126, 0.05);
  border-color: var(--color-primary);
}

.target-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
  filter: drop-shadow(0 0 10px rgba(26, 35, 126, 0.2));
}

.target-card h3 {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.target-card p {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  line-height: 1.5;
}

.group-visual {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.visual-frame {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.visual-frame img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-slow);
}

.visual-frame:hover img {
  transform: scale(1.05);
}

.overlay-text {
  position: absolute;
  bottom: var(--space-8);
  left: var(--space-8);
  padding: var(--space-2) var(--space-6);
  background: var(--color-primary);
  color: black;
  font-weight: 800;
  font-size: var(--text-lg);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: var(--radius-full);
}

.visual-info {
  display: flex;
  justify-content: center;
  gap: var(--space-8);
  margin-top: var(--space-10);
}

.info-badge {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--color-text);
}

.check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--color-primary);
  color: black;
  border-radius: 50%;
  font-size: var(--text-sm);
  font-weight: 900;
}

@media (max-width: 768px) {
  .targets-grid {
    grid-template-columns: 1fr;
  }
  
  .visual-info {
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
  }
}
</style>
