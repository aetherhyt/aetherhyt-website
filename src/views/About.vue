<template>
  <section class="max-w-4xl mx-auto px-6 pt-24 pb-16 min-h-screen">
    <NeoCard className="p-8 md:p-12 relative overflow-hidden">
      <!-- Decorative background blur -->
      <div class="absolute -top-20 -right-20 w-64 h-64 bg-aeh-cyan/10 rounded-full blur-[80px]"></div>
      
      <h1 class="text-4xl md:text-5xl font-display font-bold text-white mb-8 relative z-10">
        About <span class="text-aeh-cyan">Me</span>
      </h1>
      
      <div class="prose prose-invert prose-lg text-slate-400 relative z-10">
        <p class="leading-relaxed">
          I work as a <strong class="text-white">Software Developer</strong> by trade and am a passionate streamer in my free time, currently broadcasting on <a href="https://kick.com" target="_blank" class="text-aeh-gold hover:underline font-bold">Kick.com</a>.
        </p>
        
        <p class="leading-relaxed mt-4">
          I was born on <span class="text-white">June 16, 1994</span>, in <span class="text-white">Varna, Bulgaria</span>. Since 2017, I have been living on the beautiful and sunny island of <span class="text-white">Malta</span>.
        </p>
      </div>

      <!-- Stats / Quick Info grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5 relative z-10">
        <div class="bg-black/20 p-4 rounded-sm border border-white/5">
          <h3 class="text-xs uppercase tracking-widest text-slate-500 mb-1">Location</h3>
          <p class="text-white font-medium">Malta 🇲🇹</p>
        </div>
        <div class="bg-black/20 p-4 rounded-sm border border-white/5">
          <h3 class="text-xs uppercase tracking-widest text-slate-500 mb-1">Origin</h3>
          <p class="text-white font-medium">Varna, Bulgaria 🇧🇬</p>
        </div>
         <div class="bg-black/20 p-4 rounded-sm border border-white/5">
          <h3 class="text-xs uppercase tracking-widest text-slate-500 mb-1">Occupation</h3>
          <p class="text-white font-medium">Software Developer</p>
        </div>
      </div>
    </NeoCard>
  </section>
</template>

<script setup>
import NeoCard from "../components/NeoCard.vue";
</script>
