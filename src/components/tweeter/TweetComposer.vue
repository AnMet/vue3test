<template>
  <v-container>
    <h1 class="text-center">Tweeter</h1>

    <!-- <v-card-title>{{ chat.user.name }}’s Tweet</v-card-title> -->

    <TweetInput v-model="tweet" />
    <!-- :maxlength="MAX_LENGTH" -->

    <p :class="{ 'text-error': remainingChars < 0 }">{{ remainingChars }} characters left</p>

    <v-divider></v-divider>

    <strong>Preview in uppercase:</strong>
    <div class="text-grey-darken-1">{{ tweetPreview }}</div>

    <v-btn class="mt-4" :disabled="tweet.length === 0 || remainingChars < 0" color="primary">
      Send
    </v-btn>
  </v-container>
</template>

<script setup lang="ts">
import TweetInput from '@/components/tweeter/TweetInput.vue';
import { useStore } from '@/stores/store';

import { computed, onMounted, ref, watch, watchEffect } from 'vue';

const store = useStore();

// 💬 Tweet text (ref = primitive reactivity)
const tweet = ref('');

// 📏 Max characters
const MAX_LENGTH = 10;

// ✅ Computed: how many characters are left
const remainingChars = computed(() => MAX_LENGTH - tweet.value.length);

// ✨ Computed: preview in uppercase
const tweetPreview = computed(() => tweet.value.toUpperCase());

onMounted(() => {
  if (store.tweet) {
    tweet.value = store.tweet;
  }
});

// 👀 Watch: save tweet to store on change
watch(tweet, (newTweet) => {
  store.tweet = newTweet;
});

// 🛠 Optional debug: log every reactive dependency
watchEffect(() => {
  console.log(`[debug] Tweet changed: ${tweet.value}`);
});
</script>
