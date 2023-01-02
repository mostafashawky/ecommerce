import axios from 'axios'
import routes from './routes'

// Main config
const instance = axios.create({
    baseURL: routes.baseURL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    withCredentials: true,
})

instance.interceptors.request.use((config) => {
    const token = window.localStorage.getItem('token')
    if (token) config.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
    return config
}, error => {
    return Promise.reject(error.message)
})

instance.interceptors.response.use((response) => {
    return response
}, error => {
    if (error.response.status === 401) {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        window.location = "/login"
    }
    return Promise.reject(error)
})


export default instance