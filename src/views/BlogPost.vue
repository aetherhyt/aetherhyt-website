<template>
  <div v-if="post" class="min-h-screen pt-24 pb-20 px-6">
    <!-- Hero / Header -->
    <div class="max-w-4xl mx-auto mb-10 text-center animate-slide-up">
       <div class="inline-block px-3 py-1 bg-aeh-gold/10 border border-aeh-gold/20 text-aeh-gold text-xs font-mono uppercase tracking-widest mb-4">
         {{ formatDate(post.publishedAt) }}
       </div>
       <h1 class="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
         {{ post.title }}
       </h1>
       <div class="flex items-center justify-center gap-4 text-sm text-slate-400">
         <span>By <span class="text-white font-bold">{{ post.author }}</span></span>
       </div>
    </div>

    <!-- Featured Image -->
    <div class="max-w-5xl mx-auto mb-12 rounded-sm overflow-hidden border border-white/10 shadow-2xl animate-fade-in">
       <img 
         :src="`https://cdn.hytale.com/variants/blog_cover_${post.coverImage.s3Key}`" 
         class="w-full h-auto"
       />
    </div>

    <!-- Content Reader -->
    <article class="max-w-3xl mx-auto prose prose-invert prose-lg prose-aeh animate-slide-up-delayed">
        <div class="bg-[#0a0a14] p-8 border border-white/5 rounded text-center">
            <a :href="`https://hytale.com/news/${year}/${month}/${post.slug}`" target="_blank" class="inline-flex items-center gap-2 px-6 py-3 bg-aeh-cyan/10 text-aeh-cyan border border-aeh-cyan/30 rounded font-bold hover:bg-aeh-cyan/20 transition-colors">
              Read Full Post on Hytale.com
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
        </div>
    </article>
    
    <div class="text-center mt-12">
      <router-link to="/blog" class="text-slate-500 hover:text-aeh-gold transition-colors text-sm font-bold uppercase tracking-widest">
        ← Back to Chronicles
      </router-link>
    </div>
  </div>

  <!-- Loading State -->
  <div v-else class="min-h-screen flex items-center justify-center">
    <div class="text-aeh-gold animate-pulse">Summoning content...</div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

import postsData from '@/assets/data/hytale-posts.json';

const route = useRoute();
const post = ref(null);

const year = computed(() => {
  if (!post.value) return '';
  return new Date(post.value.publishedAt).getFullYear();
});

const month = computed(() => {
  if (!post.value) return '';
  return new Date(post.value.publishedAt).getMonth() + 1; // 0-indexed
});

onMounted(async () => {
   try {
     
     const found = postsData.find(p => p.slug === route.params.slug);
     if (found) {
       post.value = found;
     }
   } catch (err) {
     console.error("Failed to load post", err);
   }
});

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', { dateStyle: 'long' });
};
</script>

<style>
.prose-aeh a {
  @apply text-aeh-cyan no-underline hover:text-aeh-gold transition-colors;
}
.prose-aeh strong {
  @apply text-white;
}
</style>