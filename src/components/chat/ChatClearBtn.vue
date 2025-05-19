<template>
  <v-row justify="center">
    <v-btn
      prepend-icon="mdi-trash-can"
      variant="outlined"
      @click="dialog = true"
      :disabled="!store.messages.length"
      >Clear</v-btn
    >

    <v-dialog v-model="dialog" width="auto">
      <v-card max-width="400" title="Clearing chat history">
        <v-card-text class="text-center"> Are you sure? </v-card-text>

        <v-divider></v-divider>

        <v-card-actions justify="center">
          <v-btn class="mx-auto" text="Yes" @click="() => dialogHandler(true)"> </v-btn>

          <v-btn class="mx-auto" text="Cancel" @click="() => dialogHandler(false)"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';
import { ref } from 'vue';

const store = useStore();

const dialog = ref(false);

function dialogHandler(val: boolean) {
  if (val) {
    store.messages = [];
  }
  dialog.value = false;
}
</script>
