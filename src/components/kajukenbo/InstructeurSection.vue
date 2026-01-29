<template>
  <section id="instructeur" class="instructeur-section">
    <div class="container">
      <div class="instructeur-content">
        <!-- Text -->
        <div class="instructeur-text">
          <div class="section-header">
            <span class="section-subtitle">Pédagogie</span>
            <h2 class="section-title">
              L'<span class="title-accent">Instructeur</span>
            </h2>
          </div>

          <div class="instructor-profile">
            <h3 class="instructor-name">Jean-Philippe KUEHN</h3>
            <p class="instructor-role">Instructeur CN 3e Dan</p>
            <p class="instructor-lineage">Formé par Luis et Jonathan DIAZ</p>
          </div>

          <div class="certifications-grid">
            <div class="cert-card glass">
              <div class="cert-icon">📜</div>
              <div class="cert-info">
                <h4>BEES 1er Degré</h4>
                <p>Educateur Sportif Karaté</p>
              </div>
            </div>
            <div class="cert-card glass">
              <div class="cert-icon">🎓</div>
              <div class="cert-info">
                <h4>DEJEPS</h4>
                <p>Diplôme d'Etat Perfectionnement Sportif</p>
              </div>
            </div>
            <div class="cert-card glass">
              <div class="cert-icon">🥋</div>
              <div class="cert-info">
                <h4>3ème Dan</h4>
                <p>Karaté & Arts Martiaux Affinitaires</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="instructeur-image">
          <div class="image-wrapper">
            <div class="image-circle glass">
              <img :src="instructorImage" alt="Jean-Philippe KUEHN" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import instructorImage from '~/assets/images/instructor.png'
</script>

<style scoped>
.instructeur-section {
  padding: var(--space-24) 0;
  position: relative;
  background: linear-gradient(180deg, rgba(10, 10, 10, 1) 0%, rgba(20, 20, 20, 1) 50%, rgba(10, 10, 10, 1) 100%);
}

.instructeur-content {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-20);
  align-items: center;
}

/* Text */
.instructeur-text {
  order: 1;
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
  margin-bottom: var(--space-8);
  line-height: 1.1;
}

.title-accent {
  background: linear-gradient(135deg, var(--color-primary), #ff6b6b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.instructor-profile {
  margin-bottom: var(--space-10);
  padding-left: var(--space-6);
  border-left: 3px solid var(--color-primary);
}

.instructor-name {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.instructor-role {
  font-size: var(--text-lg);
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: var(--space-1);
}

.instructor-lineage {
  font-size: var(--text-base);
  color: var(--color-text-muted);
  font-style: italic;
}

.certifications-grid {
  display: grid;
  gap: var(--space-4);
}

.cert-card {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-5);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.cert-card:hover {
  background: rgba(196, 30, 58, 0.05);
  border-color: rgba(196, 30, 58, 0.2);
  transform: translateX(10px);
}

.cert-icon {
  font-size: var(--text-2xl);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
}

.cert-info h4 {
  font-size: var(--text-base);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.cert-info p {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
}

/* Image */
.instructeur-image {
  order: 2;
  display: flex;
  justify-content: center;
}

.image-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
}

.image-circle {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(196, 30, 58, 0.3);
  box-shadow: 0 0 60px rgba(196, 30, 58, 0.1);
  position: relative;
}

.image-circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.image-wrapper:hover .image-circle img {
  transform: scale(1.05);
}



/* Responsive */
@media (max-width: 1024px) {
  .instructeur-content {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .instructeur-text {
    order: 2;
  }

  .instructeur-image {
    order: 1;
  }
}

@media (max-width: 768px) {
  .image-wrapper {
    width: 300px;
    height: 300px;
  }
}
</style>
