<template>
  <v-toolbar title="MyApp 🚀">
    <v-btn v-if="router.currentRoute.value.fullPath !== '/'" to="/" @click="clearActivity"
      >Home</v-btn
    >
  </v-toolbar>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

function clearActivity() {
  if (router.currentRoute.value.fullPath !== '/') {
    store.form.activity = undefined;
  }
}
</script>
