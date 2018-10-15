import { API_URL } from './Constants'

export const setToken = async (token) => {
    axios.defaults.headers['Authorization'] = await `Bearer ${token}`
}

let axios = require('axios').default
export const RestClient = axios.create({
    baseURL: API_URL,
    timeout: 50000
})