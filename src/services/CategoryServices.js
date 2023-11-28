import axios from "axios";

const CATEGORY_API_BASE_URL =
  "http://localhost:8080/pharmacy-online/admin/category";

class categoryServices {
  getCategories() {
    return axios.get(CATEGORY_API_BASE_URL + "/list");
  }

  createCategory(category) {
    return axios.post(CATEGORY_API_BASE_URL + "/create", category);
  }

  deleteCategory(category_id) {
    return axios.delete(CATEGORY_API_BASE_URL + "/delete/" + category_id);
  }
  updateCategory(category_id, category) {
    return axios.put(
      CATEGORY_API_BASE_URL + "/update/" + category_id,
      category
    );
  }

  getCategoryByid(category_id) {
    return axios.get(CATEGORY_API_BASE_URL + "/" + category_id);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new categoryServices();
