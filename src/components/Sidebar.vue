<template>
  <!-- Sidebar -->
    <aside class="flex">
    <div
        class="flex h-[100svh] w-60 flex-col overflow-y-auto bg-slate-50 pt-8 dark:border-slate-700 dark:bg-slate-900 sm:h-[100vh] sm:w-64"
    >
        <div class="flex px-4">
            <Logo />
            <h2 class="px-5 text-lg font-medium text-slate-800 dark:text-slate-200">
                Chats
                <span
                class="mx-2 rounded-full bg-blue-600 px-2 py-1 text-xs text-slate-200"
                >6</span>
            </h2>
        </div>
        <div class="mx-2 mt-8">
            <button
                class="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
                <NewChat />
                New Chat
            </button>
        </div>
        <div
        class="h-1/2 space-y-4 overflow-y-auto border-b border-slate-300 px-2 py-4 dark:border-slate-700"
        >
            <div v-for="(chat, index) in chats" :key="`chat-${index}`" class="mb-2">
                <button
                    class="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
                >
                    <h1
                        class="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                    >
                        {{ chat.name }}
                    </h1>
                    <p class="text-xs text-slate-500 dark:text-slate-400">{{ chat.time }}</p>
                </button>
            </div>
        </div>
        <div class="mt-auto w-full space-y-4 px-2 py-4">
            <button
                class="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800"
            >
                <UserIcon />
                User
            </button>
        </div>
    </div>
    </aside>
</template>

<script setup lang="ts">
    import Logo from "@/components/icons/Logo.vue";
    import NewChat from "@/components/icons/NewChat.vue";
    import UserIcon from "@/components/icons/UserIcon.vue";
// import SettingButton from "@/components/buttons/SettingButton.vue";


    defineProps<{
        chats: {
            id: number;
            name: string;
            time: string;
        }[]
    }>()

    const chats: { id: number; name: string; time: string }[] = [
        { id: 1, name: "Tailwind Classes", time: "12 Mar" },
        { id: 2, name: "explain quantum computing", time: "10 Feb" },
        { id: 3, name: "How to create ERP Diagram", time: "22 Jan" },
        { id: 4, name: "API Scaling Strategies", time: "1 Jan" },
        { id: 5, name: "What is GPT UI?", time: "1 Jan" },
        { id: 6, name: "How to use Tailwind components?", time: "1 Jan" },
    ]
</script>

<style>
aside {

  width: 16rem; /* Adjust width as needed */
  background-color: #f3f4f6; /* Example background color */
}

@media (min-width: 1024px) {
  aside {
    min-width: 20rem;
  }
}
</style>

