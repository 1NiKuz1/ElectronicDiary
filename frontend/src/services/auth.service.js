import api from "./api.js";
import TokenService from "./token.service.js";

class AuthService {
  async login({ login, password }) {
    try {
      const res = await api.post("/login", { login, password });
      TokenService.setUser(res.data);
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async logout() {
    try {
      const res = await api.post("/logout");
      TokenService.removeUser();
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new AuthService();
