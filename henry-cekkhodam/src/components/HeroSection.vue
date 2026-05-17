<script setup lang="ts">
import { ref } from 'vue'
import { khodamList, type Khodam } from '../data/khodam'
import { RefreshCw, Skull } from 'lucide-vue-next'

const inputName = ref('')
const isLoading = ref(false)
const resultKhodam = ref<Khodam | null>(null)
const loadingText = ref('Membakar kemenyan virtual...')

const spookyPhrases = [
  'Membakar kemenyan virtual...',
  'Memanggil jin qorin...',
  'Menerawang masa lalu...',
  'Membuka mata batin...'
]

const generateKhodam = (name: string): Khodam => {
  let hash = 0;
  const normalizedName = name.toLowerCase().trim();
  
  for (let i = 0; i < normalizedName.length; i++) {
    hash = normalizedName.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const index = Math.abs(hash) % khodamList.length;
  return khodamList[index];
}

const checkKhodam = () => {
  if (!inputName.value.trim()) return;

  isLoading.value = true;
  resultKhodam.value = null;

  let phraseIndex = 0;
  const textInterval = setInterval(() => {
    phraseIndex = (phraseIndex + 1) % spookyPhrases.length;
    loadingText.value = spookyPhrases[phraseIndex];
  }, 750);

  setTimeout(() => {
    clearInterval(textInterval);
    resultKhodam.value = generateKhodam(inputName.value);
    isLoading.value = false;
  }, 3000);
}

const reset = () => {
  inputName.value = ''
  resultKhodam.value = null
}
</script>

<template>
  <div class="min-h-screen bg-zinc-950 bg-[linear-gradient(to_right,#3f3f46_1px,transparent_1px),linear-gradient(to_bottom,#3f3f46_1px,transparent_1px)] bg-[size:32px_32px] text-white font-sans flex items-center justify-center p-4 sm:p-6">
    
    <div class="bg-zinc-900 border-4 border-zinc-800 rounded-2xl p-5 sm:p-7 w-full max-w-sm sm:max-w-[400px] shadow-[8px_8px_0px_#a1882d] relative z-10">
      
      <div class="text-center sm:text-left mb-6">
        <h1 class="text-2xl sm:text-3xl font-black mb-1 tracking-tight">Check Khodam kamu</h1>
        <p class="text-zinc-400 font-medium text-sm sm:text-base">Langsung aja cek kalo lu kepo.</p>
      </div>

      <div v-if="isLoading" class="border-2 border-zinc-700 bg-black rounded-xl p-8 flex flex-col items-center justify-center min-h-[260px] mb-6">
        <Skull class="w-14 h-14 text-[#a1882d] animate-pulse mb-4" />
        <p class="text-[#a1882d] font-bold text-center animate-bounce">{{ loadingText }}</p>
      </div>

      <div 
        v-else-if="resultKhodam" 
        v-motion-pop
        class="border-2 border-zinc-700 bg-black rounded-xl p-5 mb-6 text-center shadow-[4px_4px_0px_#3f3f46]"
      >
        <p class="text-xs sm:text-sm text-[#a1882d] mb-3 font-bold uppercase tracking-widest">
          {{ inputName }} khodam kamu
        </p>
        
        <img 
          :src="resultKhodam.image" 
          :alt="resultKhodam.name" 
          class="w-full h-40 sm:h-48 object-cover rounded-lg border-2 border-zinc-800 mb-4" 
        />
        
        <h2 class="text-xl sm:text-2xl font-black mb-2 text-white">
          {{ resultKhodam.name }}
        </h2>
        
        <p class="text-zinc-300 text-sm font-medium">
          "{{ resultKhodam.description }}"
        </p>
      </div>

      <div v-else class="border-2 border-zinc-800 bg-black/50 rounded-xl p-4 min-h-[150px] mb-6 flex items-center justify-center border-dashed">
         <p class="text-zinc-500 font-medium text-sm text-center">Hasil khodam gaibmu akan muncul di sini</p>
      </div>

      <div class="flex flex-col gap-3 sm:gap-4">
        <input 
          v-model="inputName"
          @keyup.enter="checkKhodam"
          type="text" 
          placeholder="Masukkan nama target..." 
          class="w-full bg-black border-2 border-zinc-700 rounded-lg p-3 text-white font-bold placeholder-zinc-500 focus:outline-none focus:border-[#a1882d] focus:shadow-[4px_4px_0px_#a1882d] transition-all"
        />
        
        <div class="flex gap-2">
          <button 
            @click="checkKhodam"
            :disabled="isLoading || !inputName"
            class="flex-1 bg-[#a1882d] hover:bg-[#cca300] disabled:bg-zinc-700 disabled:text-zinc-500 disabled:shadow-none disabled:translate-y-0 text-black font-black py-3 px-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_black] active:shadow-none active:translate-y-1 transition-all"
          >
            {{ isLoading ? 'Menerawang...' : 'Cek Sekarang' }}
          </button>
          
          <button 
            @click="reset"
            class="bg-zinc-800 hover:bg-zinc-700 text-white p-3 rounded-lg border-2 border-zinc-700 hover:border-zinc-500 transition-all flex items-center justify-center"
            title="Reset"
          >
            <RefreshCw class="w-5 h-5" />
          </button>
        </div>
      </div>

    </div>
  </div>
</template>