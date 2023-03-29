import { ref, computed, reactive, readonly } from "vue";
import { defineStore } from "pinia";
import AuthService from "@/services/auth.service.js";

export const useAuthStore = defineStore("auth", () => {
  const userData = reactive({
    user: JSON.parse(localStorage.getItem("user")) ?? {},
  });
  const isLogged = ref(userData.user.token ? true : false);

  async function login(logUser) {
    try {
      const res = await AuthService.login(logUser);
      userData.user = JSON.parse(localStorage.getItem("user"));
      isLogged.value = true;
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function logout() {
    try {
      const res = await AuthService.logout();
      userData.user = {};
      isLogged.value = false;
      return res;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return { isLogged, userData, login, logout };
});
