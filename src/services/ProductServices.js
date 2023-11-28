import axios from "axios";

const PRODUCT_API_BASE_URL =
  "http://localhost:8080/pharmacy-online/admin/products";

class ProductServices {
  getProducts_search() {
    return axios.get(PRODUCT_API_BASE_URL + "/search-list-products");
  } //http://localhost:8080/pharmacy-online/admin/products/list-products

  getProductById(productId) {
    return axios.get(PRODUCT_API_BASE_URL + "/" + productId);
  }

  getProductsByCategory(category_id) {
    return axios.get(
      PRODUCT_API_BASE_URL + "/category?category_id=" + category_id
    ); //http://localhost:8080/pharmacy-online/products/category?category_id=2
  }

  deleteProduct(productId) {
    return axios.delete(PRODUCT_API_BASE_URL + "/delete-product/" + productId);
  }

  CreateProduct(product) {
    return axios.post(PRODUCT_API_BASE_URL + "/add-product", product);
  } //http://localhost:8080/pharmacy-online/admin/products/add-product

  UpdateProduct(product, productId) {
    return axios.put(
      PRODUCT_API_BASE_URL + "/update-product/" + productId,
      product
    );
  } //http://localhost:8080/pharmacy-online/admin/products/update-product/1
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ProductServices();
