/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

const ORDER_BASE_API = "http://localhost:8080/pharmacy-online/admin/order";

class OrderService {
  getListOrder() {
    return axios.get(ORDER_BASE_API + "/list");
  } //http://localhost:8080/pharmacy-online/admin/order/list

  getDetailOrderById(orderId) {
    return axios.get(ORDER_BASE_API + "/" + orderId);
  }

  getListProductByOrderId(orderId) {
    return axios.get(ORDER_BASE_API + "/" + orderId + "/products");
  } //http://localhost:8080/pharmacy-online/admin/order/12/products

  updateOrderStatus(orderId, status) {
    return axios.post(
      ORDER_BASE_API + "/update_order_status/" + orderId,
      status
    );
  } //http://localhost:8080/pharmacy-online/admin/order/update_order_status/13

  updateQuantity(orderId) {
    return axios.put(ORDER_BASE_API + "/updateQuantity/" + orderId);
  }
}

export default new OrderService();
