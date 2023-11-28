// CategoryServices.js

import axios from "axios";

const CATEGORY_API_BASE_URL =
  "http://localhost:8080/pharmacy-online/admin/category";
const CategoryServices2 = {
  createCategory: (category) => {
    const formData = new FormData();

    // Thêm từng trường dữ liệu vào FormData
    for (const key in category) {
      formData.append(key, category[key]);
    }

    return axios.post(`${CATEGORY_API_BASE_URL}/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};

export default CategoryServices2;
