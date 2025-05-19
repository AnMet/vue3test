<template>
  <v-app>
    <AppHeader />

    <router-view />
  </v-app>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
</script>

<style>
/* your global styles or import styles.css separately */
</style>
