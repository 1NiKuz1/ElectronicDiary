import api from "./api.js";

class UserService {
  async getUsers() {
    try {
      const res = await api.get("/user");
      return res.data.details;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async createUser({ name, login, password, file, role_id }) {
    try {
      const res = await api.post("/user", {
        name,
        login,
        password,
        role_id,
      });
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
    //const reader = new FileReader();
    //reader.readAsDataURL(file);
    //reader.onload = async () => {
    //  try {
    //    const res = await api.post("/user", {
    //      name,
    //      login,
    //      password,
    //      photo_file: reader.result,
    //      role_id,
    //    });
    //    return res.data;
    //  } catch (error) {
    //    return Promise.reject(error);
    //  }
    //};
  }
}

export default new UserService();
