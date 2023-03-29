import api from "./api.js";

class OrderService {
  async currentOrders() {
    try {
      const res = await api.get("/order/taken");
      return res.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async createOrder(work_shift_id, table_id, number_of_person) {
    try {
      //console.log({ work_shift_id, table_id, number_of_person });
      const res = await api.post("/order", {
        work_shift_id,
        table_id,
        number_of_person,
      });
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async showOrder(id) {
    try {
      const res = await api.get(`order/${id}`);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async addPositionToOrder(id, menu_id, count) {
    try {
      const res = await api.post(`order/${id}/position`, { menu_id, count });
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async delPositionToOrder(idOrder, idPosition) {
    try {
      const res = await api.delete(`order/${idOrder}/position/${idPosition}`);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }

  async changeOrderStatus(id, status) {
    try {
      const res = await api.patch(`order/${id}/change-status`, { status });
      return res.data.data;
    } catch (error) {
      console.log(error?.response?.data?.error ?? error);
      return Promise.reject(error?.response?.data?.error ?? error);
    }
  }
}

export default new OrderService();
