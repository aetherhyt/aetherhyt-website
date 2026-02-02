<template>
  <section class="mx-auto max-w-4xl px-6 py-20">
    <NeoCard className="p-10">
      <h2 class="text-4xl font-display font-black mb-6">About Me</h2>
      <div class="prose prose-invert prose-lg text-slate-400">
        <p>This is the About page template.</p>
        <p>Edit <code class="bg-white/10 px-1 py-0.5 rounded text-sm font-mono">src/views/About.vue</code> to add your biography.</p>
      </div>
    </NeoCard>
  </section>
</template>

<script setup>
import NeoCard from "../components/NeoCard.vue";
</script>
