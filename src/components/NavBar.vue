<template>
  <header class="navbar" :class="{ scrolled: isScrolled }">
    <div class="container navbar-container">
      <!-- Logo -->
      <NuxtLink to="/" class="navbar-logo">
        <span class="logo-text">KAJUKENBO</span>
        <span class="logo-sub">ALSACE</span>
      </NuxtLink>

      <!-- Desktop Navigation -->
      <nav class="navbar-nav desktop-nav">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path" 
          class="nav-link"
          :class="{ active: route.path === link.path }"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Button -->
      <button 
        class="mobile-menu-btn" 
        @click="toggleMobileMenu"
        :aria-expanded="isMobileMenuOpen"
        aria-label="Menu"
      >
        <span class="menu-icon" :class="{ open: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav class="navbar-nav mobile-nav" :class="{ open: isMobileMenuOpen }">
      <NuxtLink 
        v-for="link in navLinks" 
        :key="link.path"
        :to="link.path" 
        class="nav-link"
        :class="{ active: route.path === link.path }"
        @click="closeMobileMenu"
      >
        {{ link.name }}
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const route = useRoute()

interface NavLink {
  name: string
  path: string
}

const navLinks: NavLink[] = [
  { name: 'Accueil', path: '/' },
  { name: 'Kajukenbo', path: '/kajukenbo' },
  { name: 'Self-Défense', path: '/self-defense' },
  { name: 'Horaires', path: '/horaires' },
  { name: 'Actualités', path: '/actualites' },
  { name: 'Contact', path: '/contact' }
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: var(--space-4) 0;
  transition: all var(--transition-base);
}

.navbar.scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  padding: var(--space-3) 0;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.navbar-logo {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  line-height: 1.1;
}

.logo-text {
  font-size: var(--text-lg);
  font-weight: 800;
  letter-spacing: 0.1em;
  color: var(--color-text);
}

.logo-sub {
  font-size: var(--text-xs);
  font-weight: 400;
  letter-spacing: 0.3em;
  color: var(--color-primary);
}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  gap: var(--space-1);
}

.nav-link {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-text-muted);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: all var(--transition-base);
}

.nav-link:hover {
  color: var(--color-text);
  background: rgba(255, 255, 255, 0.05);
}

.nav-link.active {
  color: var(--color-primary);
  background: rgba(196, 30, 58, 0.1);
}

/* Mobile Menu Button */
.mobile-menu-btn {
  display: none;
  padding: var(--space-2);
  background: none;
  border: none;
  cursor: pointer;
}

.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 24px;
}

.menu-icon span {
  display: block;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: all var(--transition-base);
}

.menu-icon.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Mobile Navigation */
.mobile-nav {
  display: none;
  flex-direction: column;
  padding: var(--space-4);
  background: rgba(10, 10, 10, 0.98);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.mobile-nav .nav-link {
  padding: var(--space-4);
  text-align: center;
  border-radius: var(--radius-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .mobile-menu-btn {
    display: block;
  }

  .mobile-nav {
    display: none;
  }

  .mobile-nav.open {
    display: flex;
  }
}
</style>
