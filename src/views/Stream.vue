<template>
  <div class="pt-24 pb-10 min-h-screen px-4 md:px-8 max-w-[1920px] mx-auto">
    <!-- Stream Header Info -->
    <div class="flex flex-col md:flex-row justify-between items-end mb-6 gap-4 animate-slide-up">
      <div>
        <div class="flex items-center gap-3 mb-2">
           <span class="bg-[#00E52C] text-black text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded animate-pulse">
            LIVE
           </span>
           <h1 class="text-3xl md:text-4xl font-display font-black text-white tracking-tight">
             Stream Deck
           </h1>
        </div>
        <p class="text-slate-400 max-w-xl">
          Building in Hytale, coding custom mods, and hanging out with the community.
        </p>
      </div>
      
      <div class="flex gap-3">
         <a href="https://kick.com/aetherhyt" target="_blank" class="px-4 py-2 bg-[#00E52C]/10 text-[#00E52C] border border-[#00E52C]/20 rounded-md text-sm font-bold uppercase hover:bg-[#00E52C] hover:text-black transition-all">
           Open in Kick
         </a>
      </div>
    </div>

    <!-- Main Theater Layout -->
    <div class="grid lg:grid-cols-4 gap-6 h-[80vh] animate-slide-up-delayed">
      
      <!-- Video Player (Takes up 3 cols) -->
      <div class="lg:col-span-3 h-full relative group">
        <!-- Glass Frame -->
        <div class="absolute -inset-0.5 bg-gradient-to-br from-aeh-cyan/50 to-aeh-kick/50 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
        
        <div class="relative h-full w-full bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <iframe 
            class="w-full h-full"
            src="https://player.kick.com/aetherhyt?autoplay=true" 
            frameborder="0" 
            allowfullscreen="true" 
            scrolling="no" 
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope; clipboard-write;"
          ></iframe>
        </div>
      </div>

      <!-- Chat (Takes up 1 col) -->
      <div class="lg:col-span-1 h-full hidden lg:block relative">
         <div class="absolute -inset-0.5 bg-gradient-to-bl from-aeh-gold/30 to-purple-500/30 rounded-xl blur opacity-20"></div>
         
         <div class="relative h-full w-full bg-[#0b0b0b] rounded-xl overflow-hidden border border-white/10 flex flex-col">
            <div class="bg-black/50 p-2 border-b border-white/5 flex items-center justify-between">
              <span class="text-xs font-bold text-slate-400 uppercase tracking-widest ml-2">Chat Room</span>
              <div class="h-2 w-2 rounded-full bg-aeh-kick animate-pulse mr-2"></div>
            </div>
            <!-- Note: Kick chat embed URL might vary. 
                 Using the chatroom popup logic or standard iframe if supported. 
                 Common workaround is embedding the chat page but it might have X-Frame-Options.
                 If standard embed fails, we provide a button. 
                 Assuming 'kick.com/channel/chat' works or similar. -->
            <iframe 
               class="w-full h-full"
               src="https://kick.com/popout/aetherhyt/chat" 
               frameborder="0"
            ></iframe>
         </div>
      </div>
      
    </div>

    <!-- Mobile Chat Fallback -->
    <div class="lg:hidden mt-6">
       <a href="https://kick.com/aetherhyt/chat" target="_blank" class="block w-full text-center py-4 bg-[#0F172A] border border-white/10 rounded-xl text-slate-300 font-bold hover:text-white hover:border-aeh-cyan/50 transition-colors">
         Open Chat in New Window
       </a>
    </div>
  </div>
</template>

<script setup>
// Replace 'aeh' in the URLs above with your actual Kick username
</script>