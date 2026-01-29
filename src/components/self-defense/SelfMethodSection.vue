<template>
  <section id="method" class="self-method-section">
    <div class="container">
      <div class="section-header center">
        <span class="section-subtitle">Approche</span>
        <h2 class="section-title">Les Piliers de l'<span class="title-accent">Efficacité</span></h2>
      </div>

      <div class="methods-container">
        <!-- Block 1: Pourquoi -->
        <div class="method-block">
          <div class="method-visual glass">
            <img src="~/assets/images/self-why.jpg" alt="Pourquoi la Self-Défense" />
            <div class="badge-icon">🎯</div>
          </div>
          <div class="method-text">
            <h3 class="block-title">L'Objectif</h3>
            <p class="block-desc">
              Acquérir des <strong>réflexes de survie</strong>. Ni art, ni sport, c'est une méthode pragmatique pour se sortir de situations d'agression.
            </p>
            <ul class="block-list">
              <li>Techniques simples & logiques</li>
              <li>Gestion du stress</li>
              <li>Préservation de l'intégrité</li>
            </ul>
          </div>
        </div>

        <!-- Block 2: Comment -->
        <div class="method-block reverse">
          <div class="method-visual glass">
            <img src="~/assets/images/self-comment.jpg" alt="Comment pratiquer" />
            <div class="badge-icon">⚡</div>
          </div>
          <div class="method-text">
            <h3 class="block-title">La Méthode</h3>
            <p class="block-desc">
              Une préparation complète qui va au-delà de la technique pure. Nous abordons la psychologie du conflit et le cadre légal.
            </p>
            <ul class="block-list">
              <li>Condition physique</li>
              <li>Légitime défense</li>
              <li>Scénarios réalistes</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.self-method-section {
  padding: var(--space-24) 0;
  position: relative;
  background: linear-gradient(180deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 100%);
}

.section-header.center {
  text-align: center;
  margin-bottom: var(--space-20);
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
  line-height: 1.1;
}

.methods-container {
  display: flex;
  flex-direction: column;
  gap: var(--space-24);
}

.method-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: center;
}

.method-block.reverse {
  direction: rtl; /* Check this, maybe just order change */
}
/* Better way for reverse without direction rtl which messes text */
.method-block.reverse .method-text {
  order: 1; /* Visual left */
  direction: ltr;
}
.method-block.reverse .method-visual {
  order: 2; /* Visual right */
}

/* Wait, default is visual left (order 1), text right (order 2).
   Reverse should be Text Left, Visual Right. Or Visual Right, Text Left.
   Let's stick to explicit order or grid areas.
   Default: Visual (left), Text (right)
   Reverse: Visual (right), Text (left)
*/
.method-block.reverse .method-visual {
  order: 2;
}
.method-block.reverse .method-text {
  order: 1;
}

.method-visual {
  position: relative;
  border-radius: var(--radius-2xl);
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  aspect-ratio: 4/3;
}

.method-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.method-visual:hover img {
  transform: scale(1.05);
}

.badge-icon {
  position: absolute;
  top: -20px;
  right: -20px; /* Default right for left image */
  width: 80px;
  height: 80px;
  background: var(--color-primary);
  color: black;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 10px 30px rgba(255, 215, 0, 0.4);
  z-index: 2;
}

.method-block.reverse .badge-icon {
  right: auto;
  left: -20px;
}

.method-text {
  text-align: left;
  direction: ltr; /* Reset direction */
}

.block-title {
  font-size: var(--text-3xl);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--space-6);
  position: relative;
  display: inline-block;
}

.block-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60px;
  height: 4px;
  background: var(--color-primary);
}

.block-desc {
  font-size: var(--text-lg);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: var(--space-8);
}

.block-list {
  list-style: none;
  padding: 0;
  display: grid;
  gap: var(--space-3);
}

.block-list li {
  position: relative;
  padding-left: var(--space-8);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-text);
}

.block-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 800;
}

@media (max-width: 1024px) {
  .method-block, .method-block.reverse {
    grid-template-columns: 1fr;
    gap: var(--space-10);
  }

  .method-block.reverse .method-visual {
    order: 1;
  }
  
  .method-block.reverse .method-text {
    order: 2;
  }
}
</style>
