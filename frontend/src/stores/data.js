import { ref, computed, reactive, readonly } from "vue";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import ScheduleService from "@/services/schedule.service.js";
import JournalService from "@/services/journal.service.js";

export const useDataStore = defineStore("data", () => {
  const auth = useAuthStore();
  const { userData } = auth;
  //API data collection
  const schedule = ref([]);
  const journal = ref([]);

  function $reset() {
    schedule.value = [];
    journal.value = [];
  }

  function getDayOfWeek(day) {
    switch (day) {
      case 0:
        return "Воскресенье";
      case 1:
        return "Понедельник";
      case 2:
        return "Вторник";
      case 3:
        return "Среда";
      case 4:
        return "Четверг";
      case 5:
        return "Пятница";
      case 6:
        return "Суббота";
    }
  }

  function dateСonversion(oldDate) {
    let date = new Date(oldDate);
    let newDate = `${
      date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    }.${
      date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
    }.${date.getFullYear()} ${getDayOfWeek(date.getDay())}`;
    return newDate;
  }

  function scheduleСonversion() {
    schedule.value.forEach((el) => {
      el.time = el.time.split("").splice(0, 5).join("");
      el.date = dateСonversion(el.date);
    });
  }

  async function getStudentDiary() {
    if (userData.user?.role != "student") return;
    try {
      journal.value = await JournalService.getStudentDiary();
      journal.value.forEach((el) => {
        el.date = dateСonversion(el.date);
      });
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getSheduleForAdmin() {
    if (userData.user?.role != "admin") return;
    try {
      schedule.value = await ScheduleService.getSheduleForAdmin();
      scheduleСonversion();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getSheduleForTeacher(id) {
    if (userData.user?.role != "teacher") return;
    try {
      schedule.value = await ScheduleService.getSheduleForTeacher(id);
      scheduleСonversion();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getSheduleForStudent(id) {
    if (userData.user?.role != "student") return;
    try {
      schedule.value = await ScheduleService.getSheduleForStudent(id);
      scheduleСonversion();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return {
    schedule,
    journal,
    getSheduleForAdmin,
    getSheduleForTeacher,
    getSheduleForStudent,
    getStudentDiary,
    $reset,
  };
});
