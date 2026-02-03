<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <a v-for="s in socials" :key="s.label" :href="s.href" target="_blank" rel="noreferrer"
      class="group relative overflow-hidden rounded-sm border border-white/5 bg-white/5 p-4 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:border-aeh-cyan/30">
      
      <div class="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-aeh-cyan/10 text-aeh-cyan group-hover:shadow-[0_0_10px_rgba(6,182,212,0.3)] transition-all">
        <span class="text-xl">↗</span>
      </div>
      
      <div class="font-bold text-white group-hover:text-aeh-cyan transition-colors">{{ s.label }}</div>
      <div class="text-xs text-slate-400 mt-1">{{ s.note }}</div>
    </a>
  </div>
</template>
<script setup>
defineProps({ socials: { type: Array, required: true } });
</script>
