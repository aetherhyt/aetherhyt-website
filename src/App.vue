<template>
  <div class="min-h-screen aeh-bg" ref="bgRef">
    <!-- Spotlight Grid -->
    <div 
      class="fixed inset-0 aeh-grid pointer-events-none opacity-60"
      :style="{ '--mouse-x': mouseX + 'px', '--mouse-y': mouseY + 'px' }"
    ></div>
    
    <!-- Ambient Globs -->
    <div class="pointer-events-none fixed -top-32 -right-32 h-96 w-96 rounded-full bg-aeh-cyan/10 blur-3xl floaty"></div>
    <div class="pointer-events-none fixed -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-aeh-magenta/10 blur-3xl floaty"></div>

    <!-- Magic Embers (Generated) -->
    <div class="pointer-events-none fixed inset-0 overflow-hidden">
       <div 
         v-for="n in 12" 
         :key="n"
         class="ember"
         :style="{
           left: Math.random() * 100 + '%',
           animationDuration: (Math.random() * 10 + 10) + 's',
           animationDelay: (Math.random() * 10) + 's'
         }"
       ></div>
    </div>

    <SiteNav />
    <main class="relative">
      <router-view />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import SiteNav from "./components/SiteNav.vue";
import SiteFooter from "./components/SiteFooter.vue";

const bgRef = ref(null);
const mouseX = ref(0);
const mouseY = ref(0);

const updateMouse = (e) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;
};

onMounted(() => {
  window.addEventListener('mousemove', updateMouse);
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMouse);
});
</script>
