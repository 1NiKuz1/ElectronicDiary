import api from "./api.js";

class WorkShiftService {
  async createWorkShift({ start, end }) {
    try {
      const res = await api.post("/work-shift", { start, end });
      return res.data.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async showAllWorkShifts() {
    try {
      const res = await api.get("/work-shift");
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async openWorkShift(id) {
    try {
      const res = await api.get(`/work-shift/${id}/open`);
      return res.data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async closeWorkShift(id) {
    try {
      const res = await api.get(`/work-shift/${id}/close`);
      return res.data.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async addUserOnWorkShift(id, user_id) {
    try {
      const res = await api.post(`/work-shift/${id}/user`, { user_id });
      return res.data.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async showOrderByWorkShift(id) {
    try {
      const res = await api.get(`/work-shift/${id}/order`);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async getTables() {
    try {
      const res = await api.get(`/work-shift/tables`);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async getMenu() {
    try {
      const res = await api.get(`/work-shift/menu`);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }
}

export default new WorkShiftService();
