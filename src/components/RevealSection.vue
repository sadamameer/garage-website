<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'

const { rootRef } = useScrollReveal()
</script>

<template>
  <div ref="rootRef">
    <slot />
  </div>
</template>
