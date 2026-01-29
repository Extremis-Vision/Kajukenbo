<template>
  <section id="fonctionnement" class="fonctionnement-section">
    <div class="container">
      <div class="fonctionnement-content">
        <!-- Icon -->
        <div class="etiquette-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        <div class="section-header center">
          <span class="section-subtitle">Tradition</span>
          <h2 class="section-title">
            Esprit & <span class="title-accent">Étiquette</span>
          </h2>
        </div>

        <div class="etiquette-card glass">
          <div class="quote-icon left">"</div>
          <p class="etiquette-text">
            La séance commence et finit par un enchaînement de mouvements visant à montrer 
            <strong>respect</strong> et <strong>remerciement</strong> à l'enseignement.
          </p>
          <div class="quote-icon right">"</div>
        </div>

        <div class="rules-grid">
          <div class="rule-item">
            <div class="rule-icon">🥋</div>
            <h3>Le Salut</h3>
            <p>Expression de respect mutuel et d'humilité.</p>
          </div>
          <div class="rule-item">
            <div class="rule-icon">⛩️</div>
            <h3>Le Dojo</h3>
            <p>Lieu d'étude sacré où l'on laisse son ego à l'extérieur.</p>
          </div>
          <div class="rule-item">
            <div class="rule-icon">🎗️</div>
            <h3>La Ceinture</h3>
            <p>Elle ne se porte qu'à l'intérieur de la salle d'entraînement.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fonctionnement-section {
  padding: var(--space-24) 0;
  position: relative;
  background: linear-gradient(180deg, rgba(10, 10, 10, 1) 0%, rgba(20, 20, 20, 1) 100%);
  text-align: center;
}

.fonctionnement-content {
  max-width: 800px;
  margin: 0 auto;
}

.etiquette-icon {
  display: inline-flex;
  padding: var(--space-6);
  background: rgba(196, 30, 58, 0.1);
  border-radius: 50%;
  color: var(--color-primary);
  margin-bottom: var(--space-8);
  box-shadow: 0 0 40px rgba(196, 30, 58, 0.2);
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
  margin-bottom: var(--space-10);
}

.title-accent {
  color: var(--color-primary);
}

.etiquette-card {
  position: relative;
  padding: var(--space-10) var(--space-12);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xl);
  margin-bottom: var(--space-16);
}

.etiquette-text {
  font-size: var(--text-xl);
  color: var(--color-text);
  line-height: 1.8;
  font-style: italic;
}

.etiquette-text strong {
  color: var(--color-primary);
}

.quote-icon {
  position: absolute;
  font-size: 6rem;
  color: var(--color-primary);
  opacity: 0.2;
  font-family: serif;
  line-height: 1;
}

.quote-icon.left { top: -20px; left: 20px; }
.quote-icon.right { bottom: -40px; right: 20px; }

.rules-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.rule-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rule-icon {
  font-size: 3rem;
  margin-bottom: var(--space-4);
}

.rule-item h3 {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.rule-item p {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

@media (max-width: 768px) {
  .rules-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
