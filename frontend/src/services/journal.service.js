import api from "./api.js";

class JournalService {
  async getStudentDiary() {
    try {
      const res = await api.get("/journal/student");
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }
}

export default new JournalService();
