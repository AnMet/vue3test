<template>
  <v-card class="pa-4" height="400" outlined ref="chatContainer" style="overflow-y: auto">
    <transition-group name="scroll-y-transition" tag="div">
      <div v-for="(msg, i) in chat.messages" :key="i" class="my-2">
        <v-chip
          :color="msg.from === 'user' ? 'blue lighten-3' : 'green lighten-4'"
          class="ma-1"
          label
        >
          <strong>{{ msg.from === 'user' ? 'You' : '🤖 Bot' }}: </strong> {{ msg.text }}
        </v-chip>
      </div>
    </transition-group>

    <!-- 👇 Invisible element we scroll into view -->
    <div ref="bottomRef"></div>
  </v-card>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';
import { nextTick, ref, watch } from 'vue';

const chat = useStore();
const bottomRef = ref<HTMLElement | null>(null);

// Scroll to bottomRef when messages change
watch(
  () => chat.messages.length,
  () => {
    nextTick(() => {
      bottomRef.value?.scrollIntoView({ behavior: 'auto' });
    });
  }
);
</script>
