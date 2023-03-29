import axiosInstance from "./api";
import TokenService from "./token.service";

const setup = () => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getToken();
      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  //axiosInstance.interceptors.response.use(
  //  (res) => {
  //    return res;
  //  },
  //  async (err) => {
  //    return err;
  //  }
  //);
};

export default setup;
