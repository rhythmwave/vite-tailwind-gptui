<script setup lang="ts">
import Sidebar from '../components/Sidebar.vue'
import PromptInput from '../components/PromptInput.vue'

  const chats: { id: number; name: string; time: string }[] = [
      { id: 1, name: "Tailwind Classes", time: "12 Mar" },
      { id: 2, name: "explain quantum computing", time: "10 Feb" },
      { id: 3, name: "How to create ERP Diagram", time: "22 Jan" },
      { id: 4, name: "API Scaling Strategies", time: "1 Jan" },
      { id: 5, name: "What is GPT UI?", time: "1 Jan" },
      { id: 6, name: "How to use Tailwind components?", time: "1 Jan" },
  ]
</script>

<template>
  <div class="flex flex-row min-h-screen">
    <div class="flex-none w-60 flex flex-col bg-slate-50 dark:bg-slate-900">
      <Sidebar :chats="chats"/>
    </div>
  </div>
  
    <PromptInput class="bottom-middle"/>
</template>

<style scoped>
.fixed {
    z-index: 10;
  }

  .flex-1 {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    min-height: calc(100vh - 4rem); /* Adjust as needed */
  }

  .bottom-middle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem; /* Adjust as needed */
  }
</style>

<style scoped>
.flex-row {
  height: 100vh;
}

.flex-none {
  width: 0;
  flex-shrink: 0;
}

.flex-1 {
  flex-grow: 1;
}
</style>

