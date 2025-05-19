<template>
  <v-container>
    <h1 class="text-center">Welcome to the Chat simulation page</h1>
    <ChatWindow />
    <ChatInput class="mt-4" />
    <ChatClearBtn class="mt-4" />

    <v-card class="mt-5 py-2 px-4">
      <div v-for="(msg, index) in store.messages" :key="index">
        <strong>{{ msg.from }}:</strong> {{ msg.text }}
      </div>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import ChatClearBtn from '@/components/chat/ChatClearBtn.vue';

import { useStore } from '@/stores/store';
import ChatInput from './ChatInput.vue';
import ChatWindow from './ChatWindow.vue';

const store = useStore();
</script>
