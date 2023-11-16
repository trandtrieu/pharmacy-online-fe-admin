import axios from "axios"

const ACCOUNT_API_URL = "http://localhost:8080/pharmacy-online/admin/account/"


export const addAccount = (account) => {
    return axios.post(ACCOUNT_API_URL, account)
}

export const getAccounts = () => {
    return axios.get(ACCOUNT_API_URL)
}

export const getAccountById = (id) => {
    return axios.get(ACCOUNT_API_URL + id)
}

export const deleteAccount = (id) => {
    return axios.delete(ACCOUNT_API_URL + id)
}

export const updateAccount = (id, account) => {
    return axios.put(ACCOUNT_API_URL + id, account)
}
