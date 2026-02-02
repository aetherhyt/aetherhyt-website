<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import logoImg from '../assets/aeh-logo.png';

const route = useRoute();
const navRef = ref(null);
const pillStyle = ref({
  left: '0px',
  width: '0px',
  opacity: 0
});

const updatePill = () => {
  if (!navRef.value) return;
  const activeLink = navRef.value.querySelector('.router-link-active');
  
  if (activeLink) {
    pillStyle.value = {
      left: `${activeLink.offsetLeft}px`,
      width: `${activeLink.offsetWidth}px`,
      opacity: 1
    };
  } else {
    pillStyle.value = { ...pillStyle.value, opacity: 0 };
  }
};

watch(
  () => route.path,
  () => nextTick(updatePill)
);

onMounted(() => {
  // Wait for font load/layout
  setTimeout(updatePill, 200);
});
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md animate-fade-in">
    <div class="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3 group">
        <img :src="logoImg" alt="AEH Logo" class="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform duration-300" />
        <div class="text-lg font-display font-bold tracking-tight text-white group-hover:text-aeh-kick transition-colors">
          ÆTHERHYT
        </div>
      </RouterLink>

      <nav ref="navRef" class="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-3xl shadow-lg relative">
        <!-- Sliding Background Pill -->
        <div 
          class="absolute top-1 bottom-1 bg-aeh-cyan/10 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border border-aeh-cyan/30 shadow-[0_0_15px_rgba(78,205,196,0.2)]"
          :style="pillStyle"
        ></div>

        <RouterLink class="navlink relative z-10" to="/">Home</RouterLink>
        <RouterLink class="navlink relative z-10" to="/projects">Projects</RouterLink>
        <RouterLink class="navlink relative z-10" to="/blog">Chronicles</RouterLink>
        <RouterLink class="navlink relative z-10" to="/about">About</RouterLink>
        <RouterLink class="navlink relative z-10" to="/contact">Contact</RouterLink>
      </nav>
      
      <!-- Mobile menu button placeholder -->
      <button class="md:hidden text-white/70 hover:text-aeh-cyan transition-colors hover:rotate-90 duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.navlink { 
  @apply px-5 py-2 rounded-full text-sm font-medium text-slate-400 transition-all duration-300 hover:text-white;
}

/* Hover Effect: Text only now, since pill handles background */
.navlink:hover {
  @apply text-white;
  transform: translateY(-1px);
}

/* Active State: Text Color Only */
.navlink.router-link-active { 
  @apply text-aeh-cyan;
}

/* Click Effect */
.navlink:active {
  transform: scale(0.95);
}
</style>
