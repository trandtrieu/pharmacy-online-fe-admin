import axios from "axios";
const CART_API_BASE_URL = "http://localhost:8080/pharmacy-online/admin/cart";

class CartServices {
  addToCart(accountId, productId, quantity) {
    return axios.post(
      CART_API_BASE_URL +
        "/add-cart?accountId=" +
        accountId +
        "&productId=" +
        productId +
        "&quantity=" +
        quantity +
        "&cart_type=1"
    );
  }

  getListCartByAccountId(accountId, cart_type) {
    return axios.get(
      CART_API_BASE_URL +
        "/get-cart?accountId=" +
        accountId +
        "&cart_type=" +
        cart_type
    );
  } //http://localhost:8080/pharmacy-online/cart/get-cart?accountId=5

  removeFromCart(cartId) {
    return axios.delete(
      CART_API_BASE_URL + "/remove-from-cart?cartId=" + cartId
    );
  } //http://localhost:8080/pharmacy-online/cart/remove-from-cart?cartId=8

  updateCart(updatedCartData) {
    return axios.put(CART_API_BASE_URL + "/update-cart", updatedCartData);
  }

  getNumberProductInCart(accountId) {
    return axios.get(
      CART_API_BASE_URL +
        "/count-product-cart?accountId=" +
        accountId +
        "&cartType=1"
    );
  }

  updateStatus(accountId, cart_type) {
    return axios.post(
      CART_API_BASE_URL +
        "/update-cart-items?accountId=" +
        accountId +
        "&cartType=" +
        cart_type
    );
  } //http://localhost:8080/pharmacy-online/admin/cart/update-cart-items?accountId=2&cartType=1
}
// eslint-disable-next-line import/no-anonymous-default-export
export default new CartServices();
