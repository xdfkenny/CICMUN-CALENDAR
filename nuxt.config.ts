import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@vueuse/nuxt', '@nuxtjs/sitemap'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // SEO Configuration
  site: {
    url: 'https://mun-calendar.vercel.app',
    name: 'MUN Calendar 2025-2026',
    description: 'Calendario completo de eventos Model United Nations en América Latina',
    defaultLocale: 'es',
  },

  // Sitemap Configuration
  sitemap: {
    strictNuxtContentPaths: true,
    exclude: ['/international-club'],
  },

  // App Configuration
  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
