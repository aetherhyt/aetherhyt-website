<template>
  <div class="rounded-sm border border-aeh-line bg-aeh-panel backdrop-blur-md shadow-glass hover:border-white/20 transition duration-500 hover-shimmer" :class="className">
    <slot />
  </div>
</template>
<script setup>
defineProps({ className: { type: String, default: "" } });
</script>
