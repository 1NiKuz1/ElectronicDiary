import { ref, computed, reactive, readonly } from "vue";
import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import UserService from "@/services/user.service.js";
import WorkShiftService from "@/services/workshift.service.js";
import OrderService from "@/services/order.service.js";

export const useDataStore = defineStore("data", () => {
  const auth = useAuthStore();
  const { userData } = auth;
  //API data collection
  const employees = ref([]);
  const shifts = ref([]);
  const orders = ref([]);
  const ordersForCook = ref([]);
  const tables = ref([]);
  const menu = ref([]);

  const selectedShift = ref({});

  function $reset() {
    employees.value = [];
    shifts.value = [];
    orders.value = [];
    ordersForCook.value = [];
    tables.value = [];
    menu.value = [];
    selectedShift.value = {};
  }

  async function getUsers() {
    if (userData.user?.role != "Администратор") return;
    try {
      employees.value = await UserService.getUsers();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getWorkShifts() {
    if (
      userData.user?.role != "Администратор" &&
      userData.user?.role != "Официант"
    )
      return;
    try {
      shifts.value = await WorkShiftService.showAllWorkShifts();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getOrdersById(id) {
    if (
      userData.user?.role != "Администратор" &&
      userData.user?.role != "Официант"
    )
      return;
    try {
      const res = await WorkShiftService.showOrderByWorkShift(id);
      orders.value = res[0].orders;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getOrdersForCook() {
    if (userData.user?.role != "Повар") return;
    try {
      const orders = await OrderService.currentOrders();
      ordersForCook.value = orders.details;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getTables() {
    if (userData.user?.role != "Официант") return;
    try {
      tables.value = await WorkShiftService.getTables();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function getMenu() {
    if (userData.user?.role != "Официант") return;
    try {
      menu.value = await WorkShiftService.getMenu();
    } catch (error) {
      return Promise.reject(error);
    }
  }

  return {
    employees,
    shifts,
    orders,
    ordersForCook,
    tables,
    menu,
    selectedShift,
    $reset,
    getUsers,
    getWorkShifts,
    getOrdersById,
    getOrdersForCook,
    getTables,
    getMenu,
  };
});
