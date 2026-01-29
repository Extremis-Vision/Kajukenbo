<template>
  <div class="schedule-grid">
    <!-- Day: Lundi -->
    <div class="day-row">
      <div class="day-label">
        <span class="day-name">LUNDI</span>
      </div>
      <div class="sessions-track">
        <div class="session-card kajukenbo glass">
          <div class="session-time">18h30 - 20h00</div>
          <div class="session-info">
            <h4 class="session-title">Kajukenbo</h4>
            <span class="session-location">📍 Dojo de La Palestre, Altkirch</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Day: Mercredi -->
    <div class="day-row">
      <div class="day-label">
        <span class="day-name">MERCREDI</span>
      </div>
      <div class="sessions-track">
        <!-- Self Defense -->
        <div class="session-card self glass-blue">
          <div class="session-time">18h30 - 19h45</div>
          <div class="session-info">
            <h4 class="session-title">Self-Défense</h4>
            <span class="session-location">📍 COSEC, Altkirch</span>
          </div>
        </div>

        <!-- Kajukenbo -->
        <div class="session-card kajukenbo glass">
          <div class="session-time">19h45 - 21h00</div>
          <div class="session-info">
            <h4 class="session-title">Kajukenbo</h4>
            <span class="session-location">📍 COSEC, Altkirch</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Holiday Rule Note -->
    <div class="grid-footer">
      <span class="warning-icon">⚠️</span>
      <p>Aucun cours n'est dispensé durant les <strong>vacances scolaires</strong> (Zone B) et jours fériés.</p>
    </div>
  </div>
</template>

<style scoped>
.schedule-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
  margin: var(--space-12) 0;
}

.grid-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  padding: var(--space-4);
  background: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-lg);
  border: 1px dashed rgba(255, 255, 255, 0.1);
  color: var(--color-text-muted);
}

.grid-footer strong {
  color: var(--color-text-accent, #C41E3A);
}

.day-row {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: var(--space-8);
  align-items: start;
}

.day-label {
  padding-top: var(--space-4);
  text-align: right;
}

.day-name {
  font-size: var(--text-xl);
  font-weight: 900;
  color: var(--color-text-muted);
  letter-spacing: 0.1em;
}

.sessions-track {
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.session-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) var(--space-8);
  border-radius: var(--radius-xl);
  border-left: 4px solid transparent;
  transition: all var(--transition-base);
}

.session-card:hover {
  transform: translateX(10px);
}

/* Kajukenbo Style - Red */
.session-card.kajukenbo {
  background: rgba(196, 30, 58, 0.05); /* Red tint */
  border-left-color: var(--color-primary);
}

.session-card.kajukenbo:hover {
  background: rgba(196, 30, 58, 0.1);
  box-shadow: 0 4px 20px rgba(196, 30, 58, 0.2);
}

/* Self Defense Style - Blue */
.session-card.self {
  background: rgba(26, 35, 126, 0.05); /* Blue tint */
  border-left-color: #1A237E;
}

.session-card.self:hover {
  background: rgba(26, 35, 126, 0.1);
  box-shadow: 0 4px 20px rgba(26, 35, 126, 0.2);
}

.session-time {
  font-size: var(--text-xl);
  font-weight: 700;
  color: var(--color-text);
  min-width: 140px;
}

.session-info {
  flex: 1;
  padding: 0 var(--space-6);
}

.session-title {
  font-size: var(--text-lg);
  font-weight: 800;
  color: var(--color-text);
  margin-bottom: var(--space-1);
}

.session-location {
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.session-badge {
  padding: var(--space-1) var(--space-4);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: 600;
  text-transform: uppercase;
  background: rgba(196, 30, 58, 0.2);
  color: var(--color-primary);
}

.session-badge.blue {
  background: rgba(26, 35, 126, 0.2);
  color: #1A237E;
}

@media (max-width: 768px) {
  .day-row {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .day-label {
    text-align: left;
    padding-top: 0;
  }

  .session-card {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }
  
  .session-time {
    font-size: var(--text-lg);
  }
  
  .session-info {
    padding: 0;
  }
  
  .session-badge {
    align-self: flex-start;
  }
}
</style>
