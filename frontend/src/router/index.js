import { createRouter, createWebHistory } from "vue-router";
import EditScheduleView from "@/views/EditScheduleView.vue";
import ScheduleView from "@/views/ScheduleView.vue";
import DiaryView from "@/views/DiaryView.vue";
import JournalView from "@/views/JournalView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
    },
    {
      path: "/edit-schedule",
      name: "edit-schedule",
      component: EditScheduleView,
    },
    {
      path: "/diary",
      name: "diary",
      component: DiaryView,
    },
    {
      path: "/journal",
      name: "journal",
      component: JournalView,
    },
  ],
});

export default router;
