<template>
  <keep-alive>
    <component :is="tag" class="message-bubble" :class="from" v-show="visible" />
  </keep-alive>

  <!-- <component :is="tag" class="message-bubble" :class="from" v-show="visible">
    <slot />
  </component> -->
</template>

<script setup lang="ts">
const props = defineProps<{
  from: 'user' | 'bot';
  visible: boolean;
  as?: string;
}>();

// Default tag to 'div' if not provided
const tag = props.as ?? 'div';
</script>

<style scoped>
.message-bubble {
  padding: 12px;
  border-radius: 12px;
  margin: 8px 0;
  max-width: 70%;
  word-wrap: break-word;
  display: inline-block;
}

.user {
  background-color: #d1e7dd;
  align-self: flex-end;
  text-align: right;
}

.bot {
  background-color: #f8d7da;
  align-self: flex-start;
  text-align: left;
}
</style>
