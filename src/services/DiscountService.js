import axios from "axios";

const Discount_API_BASE_URL =
  "http://localhost:8080/pharmacy-online/admin/discount-code/";

export const getAllDiscount = () => {
  return axios.get(Discount_API_BASE_URL + "list");
};

export const getDiscountCodeById = (id) => {
  return axios.get(Discount_API_BASE_URL + id);
};

export const getGenerateCode = () => {
  return axios.get(Discount_API_BASE_URL + "generate-code");
};

export const createDiscountCode = (discountcode) => {
  return axios.post(
    Discount_API_BASE_URL + "create-discountcode",
    discountcode
  );
};

export const deleteDiscountCode = (discountcodeID) => {
  return axios.delete(Discount_API_BASE_URL + "delete/" + discountcodeID);
};

export const updateDiscountCode = (id, discountcode) => {
  return axios.put(Discount_API_BASE_URL + "update/" + id, discountcode);
};
