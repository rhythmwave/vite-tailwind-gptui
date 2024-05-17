<template>
  <div class="flex flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
    <h1
      class="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
    >
      {{ name }}
    </h1>
    <p class="text-xs text-slate-500 dark:text-slate-400">{{ time }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
export interface ChatItemProps {
  name: string;
  time: string;
}
defineProps<ChatItemProps>();

</script>
