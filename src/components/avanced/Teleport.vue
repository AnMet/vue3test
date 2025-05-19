<template>
  <Teleport to="body">
    <v-dialog v-model="showConfirm">
      <!-- dialog content -->
      Hello, I am teleported to body from Teleport component
    </v-dialog>
  </Teleport>
</template>

<script lang="ts">
import { ref } from 'vue';

const showConfirm = ref(false);
</script>
