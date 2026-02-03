<template>
  <div class="pt-24 pb-16 min-h-screen px-6 max-w-7xl mx-auto">
    <div class="mb-12 text-center">
      <h1 class="text-4xl md:text-5xl font-display font-bold text-white mb-4">
        <span class="text-transparent bg-clip-text bg-gradient-to-b from-[#FFF5C3] to-[#C9A227]">Hytale</span> Chronicles
      </h1>
      <p class="text-slate-400 max-w-2xl mx-auto">
        Latest updates from the official Hytale development blog.
      </p>
    </div>

    <!-- Posts Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div 
        v-for="post in posts" 
        :key="post._id" 
        class="group relative bg-[#0a0a14] border border-white/5 rounded-sm overflow-hidden hover:border-aeh-cyan/30 transition-all duration-300 flex flex-col cursor-pointer"
        @click="goToPost(post.slug)"
      >
        <!-- Image -->
        <div class="aspect-video relative overflow-hidden bg-slate-900 border-b border-white/5">
           <img 
             :src="`https://cdn.hytale.com/variants/blog_thumb_${post.coverImage.s3Key}`" 
             loading="lazy"
             class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
           />
           <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-transparent to-transparent opacity-60"></div>
           
           <!-- Date Badge -->
           <div class="absolute top-3 right-3 bg-black/80 backdrop-blur-sm border border-white/10 px-3 py-1 text-xs font-mono text-aeh-gold rounded-sm">
             {{ formatDate(post.publishedAt) }}
           </div>
        </div>

        <!-- Content -->
        <div class="p-6 flex-1 flex flex-col">
          <h2 class="text-xl font-display font-bold text-white mb-3 group-hover:text-aeh-cyan transition-colors line-clamp-2 leading-tight">
            {{ post.title }}
          </h2>
          <p class="text-sm text-slate-500 line-clamp-3 mb-6 flex-1">
             {{ post.bodyExcerpt || extractExcerpt(post.body) }}
          </p>
          
          <div class="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
             <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">{{ post.author }}</span>
             <span class="text-aeh-cyan text-xs font-bold group-hover:underline">Read Entry →</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Loader -->
    <div v-if="loading" class="mt-16 text-center">
       <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-aeh-gold"></div>
       <p class="text-slate-500 text-sm mt-3 animate-pulse">Fetching scrolls...</p>
    </div>

    <!-- Load More Trigger / End of content -->
    <div ref="sentinel" class="h-10 mt-10"></div>
    
    <div v-if="!loading && !hasMore" class="mt-10 text-center text-slate-600 text-sm">
      Included all known tomes.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import postsData from '@/assets/data/hytale-posts.json';
const router = useRouter();
const posts = ref([]);
const loading = ref(false);
const hasMore = ref(true);
const page = ref(1); // Not really used by Hytale API (it returns full list usually), but we will simulate lazy load by slicing
const allPostsCache = ref([]); // Store full fetch here
const limit = 10;
const sentinel = ref(null);

// Fetch all posts initially (Hytale usually returns full array, logic might vary depending on exact endpoint quirks)
const fetchPosts = async () => {
  if (loading.value || !hasMore.value) return;
  
  loading.value = true;
  
  try {
    // If we haven't fetched anything yet, grab the big list
    if (allPostsCache.value.length === 0) {
      // Simulate API fetch with local JSON data
      // In real scenario, replace with actual fetch call
      // const response = await fetch('https://api.hytale.com/blog/posts');
      // const data = await response.json();
      const data = postsData; // Using local JSON for demo/testing
      
      allPostsCache.value = data || [];
    }

    // Simulate pagination by slicing the cached array
    const start = (page.value - 1) * limit;
    const end = start + limit;
    const nextBatch = allPostsCache.value.slice(start, end);

    if (nextBatch.length > 0) {
      posts.value = [...posts.value, ...nextBatch];
      page.value++;
    } else {
      hasMore.value = false;
    }

    // If fetch returned fewer than requested, we might be done (edge case logic)
    if (end >= allPostsCache.value.length) {
       hasMore.value = false;
    }
  } catch (err) {
    console.error("Failed to load Hytale posts:", err);
  } finally {
    loading.value = false;
  }
};

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// Fallback if no explicit excerpt
const extractExcerpt = (htmlConfig) => {
   // Hytale API sometimes returns complex object for body, or string. 
   // Assuming basic handling or empty fallback. 
   return "Click to read full details...";
};

const goToPost = (slug) => {
  router.push(`/blog/${slug}`);
};

// Intersection Observer for Infinite Scroll
let observer;
onMounted(() => {
  fetchPosts();

  observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      fetchPosts();
    }
  }, { rootMargin: '200px' });

  if (sentinel.value) observer.observe(sentinel.value);
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});
</script>