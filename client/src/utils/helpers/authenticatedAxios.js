import axios from 'axios'
import { refreshAccessToken } from '../../redux/thunk/authThunk'

const authenticatedAxios = axios.create({
  baseURL: process.env.REACT_APP_API,
  headers: {
    'Content-Type': 'application/json'
  }
})

authenticatedAxios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`

    return config
  },
  error => Promise.reject(error)
)

authenticatedAxios.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true
      await refreshAccessToken()
      return authenticatedAxios(originalRequest)
    }
    console.log({ error })

    return Promise.reject(error)
  }
)

export default authenticatedAxios
