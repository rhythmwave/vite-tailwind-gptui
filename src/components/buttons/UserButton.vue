<template>
  <button
    class="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
    @click="$emit('click')"
  >
    <UserIcon />
    User
  </button>
</template>

<script>
import UserIcon from "@/components/icons/UserIcon.vue";

export default {
  components: { UserIcon },
  emits: ["click"],
};
</script>