import Axios from "axios";
//TODO: BASE_URL
export const axios = Axios.create({
    baseURL: 'http://localhost:3000'
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