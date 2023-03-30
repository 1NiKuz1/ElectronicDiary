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

  async getSheduleForTeacher(id) {
    try {
      const res = await api.get("/schedule/teacher", { id });
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async getSheduleForStudent(id) {
    try {
      const res = await api.get("/schedule/student", { id });
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }
}

export default new ScheduleService();
