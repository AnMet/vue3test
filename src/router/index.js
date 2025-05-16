import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Chat from "../components/Chat.vue";
import FormBuilder from "../components/FormBuilder.vue";
import Quiz from "../components/Quiz.vue";

import { ActivityType } from "../components/RedirectForm.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: `/${ActivityType.chat}`, name: "Chat", component: Chat },
  { path: `/${ActivityType.form}`, name: "Form builder", component: FormBuilder },
  { path: `/${ActivityType.quiz}`, name: "Quiz game", component: Quiz },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
