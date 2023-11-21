import axios from "axios"

const Discount_API_BASE_URL = "http://localhost:8080/pharmacy-online/admin/discount-code/"

export const getAllDiscount = () => {
    return axios.get(Discount_API_BASE_URL + 'list')
}

export const getGenerateCode = () => {
    return axios.get(Discount_API_BASE_URL + 'generate-code')
}