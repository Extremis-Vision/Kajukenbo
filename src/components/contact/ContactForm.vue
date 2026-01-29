<template>
  <form @submit.prevent="handleSubmit" class="contact-form glass">
    <div class="form-header">
      <h3>Envoyez-nous un message</h3>
      <p>Une question ? Une demande d'inscription ?</p>
    </div>

    <div v-if="success" class="success-message">
      ✅ Message envoyé avec succès ! Nous vous répondrons sous 24h.
    </div>

    <div v-else class="form-body">
      <div class="form-group">
        <label for="name">Nom Complet</label>
        <input type="text" id="name" v-model="form.name" placeholder="Votre Nom" required />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="form.email" placeholder="votre@email.com" required />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" v-model="form.message" placeholder="Votre message..." rows="5" required></textarea>
      </div>

      <button type="submit" class="btn-submit" :disabled="loading">
        {{ loading ? 'Envoi...' : 'Envoyer le message' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)
const success = ref(false)

const handleSubmit = async () => {
  loading.value = true
  // Mock API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
  success.value = true
  
  // Reset form after delay
  setTimeout(() => {
    form.value = { name: '', email: '', message: '' }
    success.value = false
  }, 5000)
}
</script>

<style scoped>
.contact-form {
  padding: var(--space-8);
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.form-header {
  margin-bottom: var(--space-8);
  text-align: center;
}

.form-header h3 {
  font-size: var(--text-2xl);
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: var(--space-2);
}

.form-header p {
  color: var(--color-text-muted);
}

.form-group {
  margin-bottom: var(--space-6);
}

label {
  display: block;
  margin-bottom: var(--space-2);
  font-weight: 600;
  color: var(--color-text);
  font-size: var(--text-sm);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

input, textarea {
  width: 100%;
  padding: var(--space-4);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  color: var(--color-text);
  font-family: inherit;
  transition: all var(--transition-base);
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 0 4px rgba(196, 30, 58, 0.1);
}

.btn-submit {
  width: 100%;
  padding: var(--space-4);
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-lg);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all var(--transition-base);
}

.btn-submit:hover:not(:disabled) {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(196, 30, 58, 0.2);
}

.btn-submit:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message {
  padding: var(--space-6);
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid #10B981;
  border-radius: var(--radius-lg);
  color: #10B981;
  text-align: center;
  font-weight: 600;
  animation: fadeIn 0.5s ease;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
