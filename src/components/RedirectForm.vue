<template>
  <v-container>
    <v-form @submit.prevent="handleSubmit" ref="formRef">
      <v-text-field v-model="form.user.name" label="Name" required :rules="[nameRule]" />

      <v-text-field
        v-model="form.user.email"
        label="Email"
        type="email"
        required
        :rules="[emailRule]"
      />

      <v-select
        v-model="form.activity"
        :items="activities"
        label="Select Activity"
        required
        :rules="[activityRule]"
      />

      <v-btn type="submit" :disabled="!isFormValid">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store';
import { ActivityType, Form } from '@/types/activity';
import { computed, onMounted, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useStore();

const formRef = ref();

const form = reactive<Form>({
  user: {
    email: '',
    name: '',
  },
  activity: undefined,
});

const activities: ActivityType[] = Object.values(ActivityType);

const isFormValid = computed(() => {
  return (
    form.user?.name?.trim() !== '' &&
    form.user?.email?.trim() !== '' &&
    form.activity !== undefined &&
    activities.includes(form.activity)
  );
});

const nameRule = (v: string) => !!v || 'Name is required';
const emailRule = (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid';
const activityRule = (v: string) => !!v || 'Activity is required';

onMounted(() => {
  if (store.form && store.form.user) {
    Object.assign(form.user, store.form.user);
    form.activity = store.form.activity;
  }
});

function handleSubmit() {
  if (isFormValid.value) {
    console.log('Form submitted', form);
    store.form = Object.assign(new Form(), {
      user: {
        name: form.user.name,
        email: form.user.email,
      },
      activity: form.activity,
    });

    router.push(`/${form.activity}`);
  }
}
</script>
