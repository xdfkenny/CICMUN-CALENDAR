import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['@vueuse/nuxt', '@nuxtjs/sitemap'],

  css: ['~/assets/css/main.css'],

  runtimeConfig: {
    amadeusBaseUrl: process.env.AMADEUS_BASE_URL ?? 'https://test.api.amadeus.com',
    amadeusClientId: process.env.AMADEUS_CLIENT_ID ?? '',
    amadeusClientSecret: process.env.AMADEUS_CLIENT_SECRET ?? '',
    public: {
      travelOriginLabel: process.env.NUXT_PUBLIC_TRAVEL_ORIGIN_LABEL ?? 'Caracas, Venezuela',
      travelOriginIata: process.env.NUXT_PUBLIC_TRAVEL_ORIGIN_IATA ?? 'CCS',
      travelArrivalBufferDays: Number(process.env.NUXT_PUBLIC_TRAVEL_ARRIVAL_BUFFER_DAYS ?? '1'),
    },
  },

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
    exclude: ['/global', '/global/**', '/grobal', '/grobal/**', '/grobal-mun'],
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
