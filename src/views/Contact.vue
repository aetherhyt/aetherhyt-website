<template>
  <section class="mx-auto max-w-4xl px-6 py-20">
    <NeoCard className="p-10">
      <h2 class="text-4xl font-display font-black mb-6">Contact</h2>
      <div class="space-y-4 text-slate-400">
        <p class="text-lg">Get in touch for collaborations or just a chat.</p>
        <div class="mt-8 grid gap-4">
             <!-- Placeholder for form or contact details -->
             <div class="p-4 rounded-lg bg-white/5 border border-white/5">
                <span class="block text-sm text-slate-500 font-bold uppercase tracking-wider mb-1">Email</span>
                <span class="text-white">hello@example.com</span>
             </div>
        </div>
      </div>
    </NeoCard>
  </section>
</template>

<script setup>
import NeoCard from "../components/NeoCard.vue";
</script>
