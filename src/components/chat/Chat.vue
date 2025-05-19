<template>
  <v-container>
    <h1 class="text-center">Welcome to the Chat simulation page</h1>
    <ChatWindow />
    <ChatInput class="mt-4" />
    <ChatClearBtn class="mt-4" />
  </v-container>
</template>

<script setup lang="ts">
import ChatClearBtn from '@/components/chat/ChatClearBtn.vue';

import ChatInput from './ChatInput.vue';
import ChatWindow from './ChatWindow.vue';
</script>
