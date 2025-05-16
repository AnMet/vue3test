<template>
    <v-container>
        <v-form @submit.prevent="handleSubmit" ref="formRef">
            <v-text-field v-model="form.name" label="Name" required :rules="[nameRule]"></v-text-field>

            <v-text-field v-model="form.email" label="Email" type="email" required :rules="[emailRule]"></v-text-field>

            <v-select v-model="form.activity" :items="activities" label="Select Activity" required
                :rules="[activityRule]"></v-select>

            <v-btn type="submit" :disabled="!isFormValid">Submit</v-btn>
        </v-form>
    </v-container>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, ref } from 'vue'
import { useRouter } from 'vue-router'


interface Form {
    name: string
    email: string
    activity?: ActivityType
}

export enum ActivityType {
    chat = "chat",
    form = "form",
    quiz = "quiz",
}

export default defineComponent({
    setup() {
        const router = useRouter()
        const formRef = ref()

        const form = reactive<Form>({
            name: '',
            email: '',
            activity: undefined,
        })

        const activities: ActivityType[] = Object.values(ActivityType)

        const isFormValid = computed(() => {
            return form.name.trim()  && form.email.trim()  && activities.includes(form.activity)
        })

        const nameRule = (v: string) => !!v || 'Name is required'
        const emailRule = (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        const activityRule = (v: string) => !!v || 'Activity is required'

        function handleSubmit() {
            if (isFormValid.value) {
                console.log('Form submitted', form)
                router.push(`/${form.activity}`)
            }
        }

        return {
            form,
            activities,
            isFormValid,
            handleSubmit,
            formRef,
            nameRule,
            emailRule,
            activityRule,
        }
    },
})
</script>

