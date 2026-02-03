<template>
  <section class="mx-auto max-w-6xl px-6 py-20 lg:py-28 text-center md:text-left">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 order-2 lg:order-1 animate-slide-up relative z-10">
        <!-- Main Headline -->
        <h1 class="text-5xl md:text-7xl font-display font-black leading-[1.05] tracking-tight text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
          <span class="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C3] to-[#C9A227] filter drop-shadow-[0_2px_0_rgba(0,0,0,0.5)]">Adventure</span> <br class="hidden md:block" />
          <span class="text-transparent bg-clip-text bg-gradient-to-br from-aeh-emerald to-aeh-cyan filter drop-shadow-[0_0_15px_rgba(78,205,196,0.2)]">In Orbis</span> & 
          <span class="relative inline-block">
             <span class="glitch-text text-transparent bg-clip-text bg-gradient-to-r from-aeh-gold to-orange-400 filter drop-shadow-[0_0_25px_rgba(255,215,0,0.3)]" data-text="In Code.">In Code.</span>
          </span>
        </h1>

        <!-- Bio/Intro -->
        <p class="text-slate-400 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0 font-sans border-l-2 border-aeh-gold/30 pl-4">
          Forging procedural worlds, crafting epic builds in Hytale, and coding immersive experiences for the community.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <a href="https://kick.com/aetherhyt" target="_blank" class="group relative inline-flex items-center justify-center gap-3 rounded-sm px-8 py-4 text-sm font-bold tracking-wide uppercase bg-gradient-to-b from-[#5c3e2e] to-[#3e2b20] text-[#fcdbb4] border-2 border-[#8b654e] hover:border-[#FCD36E] hover:text-[#fff] hover:shadow-[0_0_20px_rgba(252,211,110,0.3)] transition-all duration-300 transform hover:-translate-y-1">
            <span class="font-black font-display tracking-widest">Join The Party</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </a>
          
          <RouterLink to="/projects">
             <button class="rounded-sm px-8 py-4 text-sm font-bold tracking-wide uppercase border-2 border-aeh-cyan/30 bg-aeh-cyan/5 text-aeh-cyan hover:bg-aeh-cyan/10 hover:border-aeh-cyan hover:shadow-[0_0_15px_rgba(78,205,196,0.3)] transition-all duration-300 font-display">
              Quest Log
            </button>
          </RouterLink>
        </div>

        <!-- Mini Social Proof -->
        <div class="pt-8 flex items-center justify-center md:justify-start gap-8 text-sm text-slate-500 font-medium">
          <div class="flex items-center gap-2 group cursor-pointer hover:text-aeh-kick transition-colors">
            <div class="p-2 rounded-sm bg-white/5 group-hover:bg-aeh-kick/10 transition-colors">
              <svg class="text-aeh-kick block w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 0h19A2.5 2.5 0 0124 2.5v19a2.5 2.5 0 01-2.5 2.5h-19A2.5 2.5 0 010 21.5v-19A2.5 2.5 0 012.5 0zM10.4 17.5l3.5-5.1-3.5-5.1H6.7l3.6 5.1-3.6 5.1h3.7zm4.2-.1l4.8-6h-3.3l-2.4 3.7 2.4 2.3h-2.1l-1.4-1.6-1.4 1.6h2.1l1.3-1.6 1.3 1.6h-2.1z"/></svg>
            </div>
            <span>Verified Creator</span>
          </div>
          <div class="h-8 w-px bg-white/10"></div>
          <div class="flex items-center gap-2 group cursor-pointer hover:text-aeh-cyan transition-colors">
            <div class="p-2 rounded-sm bg-white/5 group-hover:bg-aeh-cyan/10 transition-colors">
               <svg class="text-aeh-cyan block w-5 h-5" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><polyline points="7 8 3 12 7 16" /><polyline points="17 8 21 12 17 16" /><line x1="14" y1="4" x2="10" y2="20" /></svg>
            </div>
            <span>Mod/Tool Dev</span>
          </div>
        </div>
      </div>

      <!-- Right Side: Stream Card / Visual with 3D Tilt Effect -->
      <div 
        class="order-1 lg:order-2 relative animate-slide-up-delayed perspective-1000 cursor-pointer"
        @mousemove="handleTilt"
        @mouseleave="resetTilt"
        @click="navigateToStream"
      >
        <div 
          class="transition-transform duration-300 ease-out preserve-3d will-change-transform"
          :style="cardStyle"
        >
          <NeoCard className="p-0 relative overflow-hidden group border-aeh-kick/20 shadow-glowKick hover:border-aeh-kick/50 transition-colors">
             <!-- "Online" Decoration -->
             <div class="absolute top-0 right-0 p-4 z-20">
                <div class="bg-aeh-kick/10 border border-aeh-kick/50 text-aeh-kick text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded backdrop-blur-md animate-pulse">
                  ● Live (Kick)
                </div>
             </div>

             <!-- Content Image Placeholder style -->
             <div class="aspect-video bg-[#0B1221] relative flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-[url('https://cdn.hytale.com/5ca3be84-b02c-4712-ba53-966953282496_hytale_reveal_screenshot_15.jpg')] bg-cover bg-center opacity-40 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-700"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-[#020408] to-transparent"></div>
                
                <!-- Play Button Visual -->
                <div class="h-20 w-20 rounded-sm bg-aeh-gold/10 backdrop-blur-sm flex items-center justify-center border border-aeh-gold/30 group-hover:scale-110 group-hover:bg-aeh-gold/20 transition-all duration-500 cursor-pointer shadow-[0_0_30px_rgba(255,215,0,0.15)]">
                   <svg class="ml-1 text-aeh-gold" width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
             </div>

             <!-- Card Footer -->
             <div class="p-6 bg-[#0a0a14] border-t border-white/5 relative">
                <!-- Glowing line at top of footer -->
                <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aeh-kick/50 to-transparent"></div>

                <div class="flex justify-between items-start mb-2">
                   <div>
                      <h3 class="text-white font-bold text-lg leading-tight group-hover:text-aeh-kick transition-colors">Constructing the Capital City | Guild War Prep</h3>
                      <div class="text-aeh-kick text-xs font-bold uppercase tracking-wider mt-1">Hytale / Creative</div>
                   </div>
                   <div class="h-10 w-10 rounded-sm bg-aeh-kick/10 border border-aeh-kick/20 flex items-center justify-center group-hover:bg-aeh-kick/20 transition-colors">
                      <svg class="text-aeh-kick h-5 w-5" aria-hidden="true" role="img" viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 0h19A2.5 2.5 0 0124 2.5v19a2.5 2.5 0 01-2.5 2.5h-19A2.5 2.5 0 010 21.5v-19A2.5 2.5 0 012.5 0zM10.4 17.5l3.5-5.1-3.5-5.1H6.7l3.6 5.1-3.6 5.1h3.7zm4.2-.1l4.8-6h-3.3l-2.4 3.7 2.4 2.3h-2.1l-1.4-1.6-1.4 1.6h2.1l1.3-1.6 1.3 1.6h-2.1z"/></svg>
                   </div>
                </div>
                <p class="text-sm text-slate-500 line-clamp-2">
                   Designing the main keep for the server spawn. Using the new asset tools to create custom banners.
                </p>
             </div>
          </NeoCard>
        </div>
        
        <!-- Decorative Elements in 3D space behind card -->
        <div class="absolute -z-10 -bottom-10 -right-10 h-64 w-64 bg-aeh-kick/20 rounded-sm blur-[80px] opacity-60"></div>
        <div class="absolute -z-10 -top-10 -left-10 h-64 w-64 bg-aeh-cyan/10 rounded-sm blur-[80px] opacity-60"></div>
      </div>
    </div>
    
    <!-- Rune Separator -->
    <div class="mt-32 mb-20 flex items-center justify-center opacity-30">
        <div class="h-px w-32 bg-gradient-to-r from-transparent to-aeh-gold"></div>
        <div class="mx-4 text-aeh-gold text-2xl">❖</div>
        <div class="h-px w-32 bg-gradient-to-l from-transparent to-aeh-gold"></div>
    </div>

    <!-- Quick Links Strip -->
    <div class="relative">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-display font-bold text-white">Social Uplink</h2>
          <p class="text-slate-500 text-sm mt-1">Where to find me online</p>
        </div>
        <div class="hidden sm:block h-px bg-white/5 flex-1 ml-8"></div>
      </div>
      <SocialStrip :socials="socials" />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Import router
import NeoCard from "../components/NeoCard.vue";
import NeoButton from "../components/NeoButton.vue";
import SocialStrip from "../components/SocialStrip.vue";
import { socials } from "../config/socials.js";

const router = useRouter(); // Initialize router

// Tilt Effect Logic
const cardStyle = ref({});

const handleTilt = (e) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
  const rotateY = ((x - centerX) / centerX) * 5;

  cardStyle.value = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
  };
};

const resetTilt = () => {
  cardStyle.value = {
    transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
  };
};

const navigateToStream = () => {
  router.push('/stream');
};
</script>
