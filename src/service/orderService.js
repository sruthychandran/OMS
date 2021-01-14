import http from "../http-common";

class orderService {
 
  getAll() {
    return http.get('/orders');
  }

  get() {
    return http.get(`/order-details/view-order?orderId=30`);
  }

  create(data) {
    return http.post("/orders", data);
  }

  update(id, data) {
    return http.put(`/orders/${id}`, data);
  }

  delete(id) {
    return http.delete(`/orders/${id}`);
  }

  deleteAll() {
    return http.delete(`/orders`);
  }

  findByTitle(title) {
    return http.get(`/orders?title=${title}`);
  }
}

export default new orderService();