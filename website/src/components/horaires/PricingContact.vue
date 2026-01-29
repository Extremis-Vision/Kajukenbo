<template>
  <div class="contact-container">
    <!-- Contact Card -->
    <div class="info-card contact glass">
      <div class="card-header">
        <div class="icon-wrapper">📞</div>
        <h3>Contact Responsables</h3>
      </div>
      <div class="card-content">
        <div class="contact-item">
          <span class="role">Instructeur Principal</span>
          <span class="name">Jean-Philippe KUEHN</span>
          <a href="tel:+33600000000" class="contact-link">06 00 00 00 00</a>
        </div>
        <div class="contact-item">
          <span class="role">Président Association</span>
          <span class="name">Nom du Président</span>
          <a href="mailto:contact@kajukenbo-alsace.fr" class="contact-link">contact@kajukenbo-alsace.fr</a>
        </div>
        <NuxtLink to="/contact" class="btn-contact">
          Formulaire de Contact
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-container {
  display: flex;
  justify-content: center;
  margin-top: var(--space-12);
}

.info-card {
  width: 100%;
  max-width: 600px;
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all var(--transition-base);
}

.info-card:hover {
  background: rgba(255, 255, 255, 0.05);
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.icon-wrapper {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(196, 30, 58, 0.1);
  border-radius: 50%;
}

.card-header h3 {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
}

.contact-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  margin-bottom: var(--space-6);
}

.role {
  font-size: var(--text-xs);
  text-transform: uppercase;
  color: var(--color-primary);
  letter-spacing: 0.1em;
}

.name {
  font-weight: 700;
  font-size: var(--text-lg);
  color: var(--color-text);
}

.contact-link {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.2s;
}

.contact-link:hover {
  color: var(--color-primary);
}

.btn-contact {
  display: inline-block;
  width: 100%;
  padding: var(--space-3);
  text-align: center;
  background: var(--color-primary);
  color: white;
  font-weight: 700;
  border-radius: var(--radius-lg);
  text-decoration: none;
  margin-top: var(--space-2);
  transition: all var(--transition-base);
}

.btn-contact:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
}
</style>
