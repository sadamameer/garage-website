<script setup>
defineProps({
  name: { type: String, required: true },
  iconClass: { type: String, default: 'h-8 w-8' },
})
</script>

<template>
  <svg
    :class="iconClass"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <template v-if="name === 'wrench'">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </template>
    <template v-else-if="name === 'disc'">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2" />
    </template>
    <template v-else-if="name === 'droplet'">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </template>
    <template v-else-if="name === 'tire'">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2M12 18v2M4 12h2M18 12h2" />
    </template>
    <template v-else-if="name === 'gauge'">
      <path d="M12 14v-3" />
      <path d="M4.5 19.5 8 14" />
      <path d="M19.5 19.5 16 14" />
      <path d="M3 14a9 9 0 1 1 18 0" />
    </template>
    <template v-else-if="name === 'scan'">
      <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
      <rect x="7" y="7" width="10" height="10" rx="1" />
    </template>
    <template v-else-if="name === 'bolt'">
      <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8z" />
    </template>
    <template v-else-if="name === 'spring'">
      <path d="M4 18c2-2 4-4 8-4s6 2 8 4" />
      <path d="M4 12c2-2 4-4 8-4s6 2 8 4" />
      <path d="M4 6c2-2 4-4 8-4s6 2 8 4" />
    </template>
    <template v-else-if="name === 'snow'">
      <path d="M12 2v20M8 6l8 12M16 6 8 18M6 12h12" />
    </template>
    <template v-else-if="name === 'thermometer'">
      <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0z" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </template>
    <template v-else-if="name === 'calendar'">
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </template>
    <template v-else>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M8 12h8" />
    </template>
  </svg>
</template>
