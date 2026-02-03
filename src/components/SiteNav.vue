<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import logoImg from '../assets/aeh-logo.png';

const route = useRoute();
const navRef = ref(null);
const isMenuOpen = ref(false);
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
  () => {
    isMenuOpen.value = false;
    nextTick(updatePill);
  }
);

onMounted(() => {
  // Wait for font load/layout
  setTimeout(updatePill, 200);
});

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md animate-fade-in relative">
    <div class="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3 group relative z-50">
        <img :src="logoImg" alt="AEH Logo" class="h-10 w-10 object-contain drop-shadow-[0_0_10px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform duration-300" />
      </RouterLink>

      <nav ref="navRef" class="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-sm border border-white/5 backdrop-blur-3xl shadow-lg relative">
        <!-- Sliding Background Pill -->
        <div 
          class="absolute top-1 bottom-1 bg-aeh-cyan/10 rounded-sm transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] border border-aeh-cyan/30 shadow-[0_0_15px_rgba(78,205,196,0.2)]"
          :style="pillStyle"
        ></div>

        <RouterLink class="navlink relative z-10" to="/">Home</RouterLink>
        <RouterLink class="navlink relative z-10" to="/projects">Projects</RouterLink>
        <RouterLink class="navlink relative z-10" to="/blog">Chronicles</RouterLink>
        <RouterLink class="navlink relative z-10" to="/about">About</RouterLink>
        <RouterLink class="navlink relative z-10" to="/contact">Contact</RouterLink>
      </nav>
      
      <!-- Mobile menu button -->
      <button 
        @click="toggleMenu"
        class="md:hidden text-white/70 hover:text-aeh-cyan transition-colors duration-300 relative z-50 p-2"
        aria-label="Toggle Menu"
      >
        <div v-if="!isMenuOpen">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>
        <div v-else>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </div>
      </button>

      <!-- Mobile Menu Overlay -->
      <transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-5" enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in" leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-5">
        <div v-if="isMenuOpen" class="absolute top-16 left-0 w-full bg-[#020408] border-b border-white/10 shadow-2xl md:hidden flex flex-col p-6 gap-4 z-40">
            <RouterLink class="mobile-navlink" to="/">Home</RouterLink>
            <RouterLink class="mobile-navlink" to="/projects">Projects</RouterLink>
            <RouterLink class="mobile-navlink" to="/blog">Chronicles</RouterLink>
            <RouterLink class="mobile-navlink" to="/about">About</RouterLink>
            <RouterLink class="mobile-navlink" to="/contact">Contact</RouterLink>
        </div>
      </transition>
    </div>
  </header>
</template>

<style scoped>
.navlink { 
  @apply px-5 py-2 rounded-sm text-sm font-medium text-slate-400 transition-all duration-300 hover:text-white;
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

.mobile-navlink {
    @apply text-lg font-medium text-slate-400 py-3 border-b border-white/5 block hover:text-aeh-cyan transition-colors;
}
.mobile-navlink.router-link-active {
    @apply text-aeh-cyan border-aeh-cyan/30;
}
</style>
