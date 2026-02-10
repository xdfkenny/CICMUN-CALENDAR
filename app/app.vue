<script setup lang="ts">
import { Toaster } from 'vue-sonner'

useHead({
  titleTemplate: '%s | MUN Calendar',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'author', content: 'Kenny' },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'MUN Calendar 2025-2026' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ],
  link: [
    { rel: 'canonical', href: 'https://mun-calendar.vercel.app' }
  ]
})
</script>

<template>
  <div class="antialiased">
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Toaster position="top-right" rich-colors />
  </div>
</template>
