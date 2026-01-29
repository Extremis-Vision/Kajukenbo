<template>
  <div class="contact-page">
    <div class="container page-content">
      <!-- Intro -->
      <div class="header-section">
        <h1 class="page-title">Contactez-<span class="text-gradient">Nous</span></h1>
        <p class="page-subtitle">Nous sommes à votre écoute pour toute information.</p>
      </div>

      <div class="content-grid">
        <!-- Formulaire -->
        <div class="form-column">
          <ContactForm />
        </div>

        <!-- Informations -->
        <div class="info-column">
          <div class="info-card glass">
            <h3>Nos Coordonnées</h3>
            
            <div class="info-item">
              <div class="icon">📍</div>
              <div class="text">
                <strong>Dojo de La Palestre</strong><br>
                12 Rue de Hirsingue, 68130 Altkirch
              </div>
            </div>

            <div class="info-item">
              <div class="icon">📍</div>
              <div class="text">
                <strong>COSEC</strong><br>
                Rue des Cévennes, 68130 Altkirch
              </div>
            </div>



            <div class="info-item">
              <div class="icon">📧</div>
              <div class="text">
                <a href="mailto:contact@kajukenbo-alsace.fr">contact@kajukenbo-alsace.fr</a>
              </div>
            </div>
            
            <!-- Map placeholders buttons similar to Self Page -->
            <div class="map-buttons">
              <a href="https://maps.google.com/?q=La+Palestre+Altkirch" target="_blank" class="map-btn google">
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ContactForm from '~/components/contact/ContactForm.vue'

useHead({
  title: 'Contact | Kajukenbo Alsace',
  meta: [
    { 
      name: 'description', 
      content: 'Contactez le club Kajukenbo Alsace pour toute demande d\'information ou d\'inscription.' 
    }
  ]
})
</script>

<style scoped>
.contact-page {
  padding-top: 100px;
  min-height: 100vh;
  background-color: var(--color-background);
}

.header-section {
  text-align: center;
  margin-bottom: var(--space-16);
}

.page-title {
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 900;
  color: var(--color-text);
  line-height: 1.1;
  margin-bottom: var(--space-4);
}

.text-gradient {
  background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  font-size: var(--text-xl);
  color: var(--color-text-muted);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: var(--space-12);
  align-items: start;
  padding-bottom: var(--space-20);
}

.info-card {
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.info-card h3 {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-4);
  border-bottom: 2px solid var(--color-primary);
  display: inline-block;
}

.info-item {
  display: flex;
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}

.icon {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(196, 30, 58, 0.1);
  border-radius: 50%;
  color: var(--color-primary);
}

.text {
  font-size: var(--text-lg);
  color: var(--color-text);
  line-height: 1.5;
}

.text a {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.2s;
}

.text a:hover {
  color: var(--color-primary);
}

.sub {
  display: block;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  font-weight: 400;
}

.map-buttons {
  margin-top: var(--space-8);
}

.map-btn {
  display: block;
  text-align: center;
  padding: var(--space-3);
  background: #333;
  color: white;
  border-radius: var(--radius-lg);
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-base);
}

.map-btn:hover {
  background: #444;
  transform: translateY(-2px);
}

@media (max-width: 900px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .info-column {
    order: -1; /* Info first on mobile is sometimes better, or keep form first */
    order: 1;
  }
}
</style>
