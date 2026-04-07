<script setup>
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="flex min-h-svh flex-col">
    <AppNavbar />
    <main
      id="main-content"
      class="flex-1"
      tabindex="-1"
    >
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>
