import { API_URL } from "@/config";
import Axios from "axios";

export const axios = Axios.create({
    baseURL: API_URL
})

axios.interceptors.request.use(function (config) {
    config.headers.Accept = 'application/json';
    return config
})

axios.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        return Promise.reject(error)
    }
)