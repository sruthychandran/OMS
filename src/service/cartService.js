import http from "../http-common";

class cartService {
 
  get() {
    return http.get(`/cart?userId=1`);
  }

}

export default new cartService();