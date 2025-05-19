<template>
  <v-textarea
    v-model="localTweet"
    label="Enter your tweet"
    auto-grow
    rows="3"
    maxlength="50"
  ></v-textarea>
  <!-- :maxlength="maxlength" -->
</template>

<script setup lang="ts">
defineOptions({
  name: 'TweetInput',
});

// export default {
//   name: 'TweetInput',
//   // props: {
//   //   modelValue: String,
//   //   maxlength: Number,
//   // },
// };

import { ref, watch } from 'vue';

const props = defineProps<{
  modelValue: string;
  // maxlength: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const localTweet = ref(props.modelValue);

// Watch and emit changes
watch(localTweet, (val) => emit('update:modelValue', val));
watch(
  () => props.modelValue,
  (val) => {
    if (val !== localTweet.value) {
      localTweet.value = val;
    }
  }
);
</script>
