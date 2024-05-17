<template>
  <button
    class="flex justify-start rounded-lg border border-slate-300 p-4 text-sm font-medium transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
    @click="$emit('click')"
  >
    <NewChat />
    <span>New Chat</span>
  </button>
</template>

<script>
import NewChat from "@/components/icons/NewChat.vue";

export default {
  components: { NewChat },
  emits: ["click"],
};
</script>
