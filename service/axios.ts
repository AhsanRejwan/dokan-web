import axios from "axios"

const BASE_URL = "http://192.168.0.6:8080/api/v1/"

export const createDefaultAxios = () => {
    return axios.create({
        baseURL: BASE_URL
    })
}