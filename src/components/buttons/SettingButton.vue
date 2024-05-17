<template>
  <button
    class="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
    @click="$emit('click')"
  >
    <SettingIcon />
    <span class="text-slate-700 dark:text-slate-200">Settings</span>
  </button>
</template>

<script>
import SettingIcon from '@/components/icons/SettingIcon.vue';

export default {
  components: { SettingIcon },
  emits: ['click'],
};
</script>