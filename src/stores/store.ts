import { Form, Message } from '@/types/activity';
import { defineStore } from 'pinia';

export const useStore = defineStore('store', {
  state: () => ({
    messages: [] as Message[],
    tweet: '',
    form: {} as Form,
  }),
  getters: {
    getMessages: (state) => state.messages,
    getTweet: (state) => state.tweet,
  },
  actions: {
    sendMessage(text: string) {
      this.messages.push({ from: 'user', text });
      console.log('User message added:', this.messages);

      // Simulate bot response
      setTimeout(() => {
        this.messages.push({ from: 'bot', text: `You said "${text}"` });
        console.log(' Bot message added:', this.messages);
      }, 800);
    },
    register(form: Form) {
      this.form = form;
    },
  },
});
