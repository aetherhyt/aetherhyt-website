<template>
  <section class="mx-auto max-w-6xl px-6 py-20 lg:py-28">
    <div class="mb-16 text-center md:text-left relative z-10">
      <div class="inline-flex items-center gap-2 mb-4">
        <div class="h-px w-8 bg-aeh-cyan/50"></div>
        <span class="text-aeh-cyan uppercase tracking-widest text-xs font-bold">Portfolio</span>
      </div>
      <h2 class="text-5xl font-display font-black text-white mb-4">
        Quest Log <span class="text-aeh-gold">.</span>
      </h2>
      <p class="text-slate-400 text-lg max-w-2xl leading-relaxed">
        A collection of tools, mods, and creative builds from the Hytale ecosystem and beyond.
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      <NeoCard 
        v-for="(p, index) in projects" 
        :key="p.title" 
        className="p-0 group hover:border-aeh-cyan/50 transition-all duration-500 h-full flex flex-col overflow-hidden relative"
        :style="{ animationDelay: `${index * 100}ms` }"
        class="animate-slide-up-delayed"
      >
        <!-- Card Image / Header Area -->
        <div class="h-40 bg-gradient-to-br from-slate-900 to-black relative overflow-hidden">
           <!-- Decorative Background Pattern -->
           <div class="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-aeh-cyan via-transparent to-transparent"></div>
           
           <!-- Tag -->
           <div class="absolute top-4 right-4 z-10">
             <span class="text-[10px] font-black tracking-widest uppercase text-black bg-aeh-cyan px-2 py-1 rounded shadow-[0_0_10px_rgba(78,205,196,0.5)]">
               {{ p.tag }}
             </span>
           </div>

           <!-- Icon/Symbol -->
           <div class="absolute bottom-4 left-6 h-12 w-12 rounded-lg bg-[#0F172A] border border-white/10 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:border-aeh-cyan/50 transition-all duration-300">
              <span class="text-xl">⚔️</span>
           </div>
        </div>

        <!-- Content -->
        <div class="p-6 pt-4 flex-1 flex flex-col bg-[#0a0a14]">
          <h3 class="font-display font-bold text-xl text-white mb-2 group-hover:text-aeh-cyan transition-colors">{{ p.title }}</h3>
          <p class="text-sm text-slate-400 leading-relaxed mb-6 flex-1">{{ p.desc }}</p>
          
          <div class="pt-4 border-t border-white/5 flex items-center justify-between">
            <span class="text-xs font-medium text-slate-500 group-hover:text-slate-300 transition-colors">View Project</span>
            <div class="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-aeh-cyan group-hover:text-black transition-all duration-300">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </div>
          </div>
        </div>
        
        <!-- Hover Glow Effect -->
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none absolute inset-0 bg-gradient-to-t from-aeh-cyan/5 via-transparent to-transparent"></div>
      </NeoCard>
    </div>
  </section>
</template>

<script setup>
import NeoCard from "../components/NeoCard.vue";
import projects from "../data/projects.json";
</script>
