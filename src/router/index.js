import { createRouter, createWebHistory } from 'vue-router';
import Advanced from '../components/avanced/Advanced.vue';
import Chat from '../components/chat/Chat.vue';
import FormBuilder from '../components/FormBuilder.vue';
import TweetComposer from '../components/tweeter/TweetComposer.vue';
import Home from '../views/Home.vue';

import { ActivityType } from '../types/activity.ts';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: `/${ActivityType.chat}`, name: 'Chat', component: Chat },
  { path: `/${ActivityType.form}`, name: 'Form builder', component: FormBuilder },
  { path: `/${ActivityType.advanced}`, name: 'Advanced features', component: Advanced },
  { path: `/${ActivityType.tweet}`, name: 'Tweet Composer', component: TweetComposer },
  {
    path: '/lazy',
    name: 'Lazy',
    component: () => import('@/views/LazyView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
