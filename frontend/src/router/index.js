import { createRouter, createWebHistory } from "vue-router";
import EditScheduleView from "@/views/EditScheduleView.vue";
import ScheduleView from "@/views/ScheduleView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "schedule",
      component: ScheduleView,
    },
    {
      path: "/edit-schedule",
      name: "edit-schedule",
      component: EditScheduleView,
    },
  ],
});

export default router;
