<template>
  <section id="about" class="about-section">
    <div class="container">
      <!-- Section Header -->
      <div class="section-header">
        <span class="section-label">Découvrez-nous</span>
        <h2 class="section-title">
          Notre <span class="title-accent">Club</span>
        </h2>
      </div>

      <!-- Features Grid -->
      <div class="features-grid">
        <!-- Pour Qui -->
        <div class="feature-card glass">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 class="feature-title">Pour Qui ?</h3>
          <p class="feature-text">
            À partir de <strong>15 ans</strong><br>
            Homme ou Femme<br>
            <em>Peu importe le niveau sportif</em>
          </p>
        </div>

        <!-- Ambiance -->
        <div class="feature-card glass">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
            </svg>
          </div>
          <h3 class="feature-title">Ambiance</h3>
          <p class="feature-text">
            <strong>Sympa</strong> et <strong>Studieux</strong><br>
            Un environnement bienveillant pour progresser à son rythme
          </p>
        </div>

        <!-- Esprit OHANA -->
        <div class="feature-card glass ohana-card">
          <div class="feature-icon ohana-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
          <h3 class="feature-title">
            Esprit <span class="ohana-text">OHANA</span>
          </h3>
          <p class="feature-text">
            <strong>OHANA</strong> signifie <em>famille</em> en hawaïen.<br>
            Tous les cours se font dans le <strong>respect</strong>.<br>
            Pas de compétition, mais de l'<strong>entraide</strong>.
          </p>
        </div>

        <!-- Affiliation -->
        <div class="feature-card glass">
          <div class="feature-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 class="feature-title">Affiliation FNSMR</h3>
          <p class="feature-text">
            Club affilié à la <strong>Fédération Nationale du Sport en Milieu Rural</strong>.<br>
            Agréée par le Ministère des Sports depuis 1983.
          </p>
        </div>
      </div>

      <!-- Social Media -->
      <div class="social-section">
        <h3 class="social-title">Suivez-nous</h3>
        <div class="social-links">
          <a 
            href="https://www.instagram.com/kajukenboalsace/" 
            target="_blank" 
            class="social-link instagram"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>Instagram</span>
          </a>
          <a 
            href="https://www.facebook.com/people/Kajukenbo-Alsace/100057307545884/" 
            target="_blank" 
            class="social-link facebook"
            aria-label="Facebook"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// About section component with club info and social media
</script>

<style scoped>
.about-section {
  padding: var(--space-24) 0;
  position: relative;
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
}

.title-accent {
  color: var(--color-primary);
}

/* Features Grid */
.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-bottom: var(--space-16);
}

.feature-card {
  padding: var(--space-8);
  text-align: center;
  border-radius: var(--radius-xl);
  transition: all var(--transition-base);
  background: rgba(10, 10, 10, 0.6); /* Fond plus sombre/noir */
  border: 1px solid rgba(255, 255, 255, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature-card:hover {
  transform: translateY(-8px);
  background: rgba(20, 20, 20, 0.8);
  border-color: rgba(196, 30, 58, 0.3); /* Rouge au survol */
}

.feature-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  margin: 0 auto var(--space-6);
  background: rgba(0, 0, 0, 0.4); /* Icon container sombre */
  border: 1px solid rgba(196, 30, 58, 0.2); /* Bordure rouge subtile */
  border-radius: var(--radius-xl);
  color: var(--color-primary);
  transition: all var(--transition-base);
}

.feature-card:hover .feature-icon {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  transform: scale(1.1);
}

.feature-title {
  font-size: var(--text-lg);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-4);
}

.feature-text {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  line-height: 1.6;
}

.feature-text strong {
  color: white;
  font-weight: 600;
}

/* OHANA Special Card */
.ohana-card {
  background: linear-gradient(135deg, rgba(196, 30, 58, 0.05) 0%, rgba(0, 0, 0, 0.8) 100%);
  border: 1px solid var(--color-primary);
  box-shadow: 0 0 30px rgba(196, 30, 58, 0.1);
}

.ohana-card:hover {
  box-shadow: 0 0 50px rgba(196, 30, 58, 0.2);
  transform: translateY(-8px);
}

.ohana-card .feature-icon {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
  box-shadow: 0 5px 15px rgba(196, 30, 58, 0.4);
}

.ohana-text {
  color: var(--color-primary);
  font-weight: 800;
  text-transform: uppercase;
  font-style: normal;
}

/* Social Section */
.social-section {
  text-align: center;
  padding: var(--space-10);
  background: transparent; /* Suppression fond carte */
  border: none;
}

.social-title {
  font-size: var(--text-lg);
  font-weight: 600;
  color: white;
  margin-bottom: var(--space-8);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--space-6);
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-8);
  border-radius: 50px; /* Pill Shape */
  text-decoration: none;
  font-weight: 600;
  transition: all var(--transition-base);
  font-size: var(--text-base);
}

.social-link.instagram {
  background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
  color: white;
}

.social-link.instagram:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(220, 39, 67, 0.4);
}

.social-link.facebook {
  background: #1877f2;
  color: white;
}

.social-link.facebook:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(24, 119, 242, 0.4);
}

/* Responsive */
@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: var(--space-16) 0;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .social-links {
    flex-direction: column;
    align-items: center;
  }

  .social-link {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
</style>
