<template>
  <footer class="border-t border-white/5 bg-[#020408]">
    <div class="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
      <div class="flex items-center gap-3">
        <img :src="logoImg" alt="AEH Logo" class="h-12 w-12 object-contain grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
        <div>
           <div class="font-display font-bold text-white tracking-widest text-lg">ÆTHERHYT</div>
           <div class="text-xs text-slate-600 mt-1 uppercase tracking-wider">Orbis & Void</div>
        </div>
      </div>
      <div class="text-sm text-slate-500">© {{ year }} — Designed by <span class="text-white/80">ÆHy</span></div>
    </div>
  </footer>
</template>
<script setup>
import logoImg from '../assets/aeh-logo.png';
const year = new Date().getFullYear();
</script>
