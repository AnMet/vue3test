<template>
  <v-form @submit.prevent="submit">
    <v-text-field
      v-model="text"
      label="Type your message"
      variant="outlined"
      append-inner-icon="mdi-send"
      @click:append-inner="submit"
      hide-details
    />
  </v-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '../../stores/store';

const chat = useStore();
const text = ref('');

function submit() {
  if (text.value.trim()) {
    chat.sendMessage(text.value);
    text.value = '';
  }
}
</script>
