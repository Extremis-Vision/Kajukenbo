// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  
  // Source directory
  srcDir: 'src/',
  
  // App configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Kajukenbo Alsace',
      meta: [
        { name: 'description', content: 'Club d\'arts martiaux Kajukenbo en Alsace' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/jpeg', href: '/favicon.jpg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/favicon.jpg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Noto+Sans+JP:wght@400;500;700&display=swap' }
      ]
    }
  },

  // Nitro Configuration for Production
  nitro: {
    preset: 'node-server',
    serveStatic: true,
  },

  // CSS
  css: ['~/assets/css/main.css']
})
