<template>
  <button
    class="group relative inline-flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-sm font-bold tracking-wide uppercase
           border border-aeh-cyan/30 bg-aeh-cyan/5 text-aeh-cyan hover:bg-aeh-cyan/10 hover:border-aeh-cyan/60 hover:shadow-glowCyan
           transition-all duration-300 transform hover:-translate-y-0.5"
    :type="type"
    :class="className"
  >
    <slot />
    <span class="opacity-70 group-hover:translate-x-1 transition-transform duration-300">→</span>
  </button>
</template>
<script setup>
defineProps({ className: { type: String, default: "" }, type: { type: String, default: "button" } });
</script>
