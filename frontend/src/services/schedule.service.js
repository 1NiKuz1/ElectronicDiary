import api from "./api.js";

class ScheduleService {
  async getSheduleForAdmin() {
    try {
      const res = await api.get("/schedule/");
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async getSheduleForTeacher() {
    try {
      const res = await api.get("/schedule/teacher");
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async getSheduleForStudent() {
    try {
      const res = await api.get("/schedule/student");
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }
}

export default new ScheduleService();
