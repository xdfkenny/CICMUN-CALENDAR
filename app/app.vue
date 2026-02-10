<script setup lang="ts">
import { Toaster } from 'vue-sonner'
</script>

<template>
  <div class="antialiased">
    <NuxtRouteAnnouncer />
    <NuxtPage />
    <Toaster position="top-right" rich-colors />
  </div>
</template>
