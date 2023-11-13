import axios from "axios";

const CATEGORY_API_BASE_URL = "http://localhost:8080/pharmacy-online/category";

class categoryServices {
    getCategoryType() {
        return axios.get(CATEGORY_API_BASE_URL + "/type");
    }

    getCategories() {
        return axios.get("http://localhost:8080/pharmacy-online/admin/category/categories")
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new categoryServices();