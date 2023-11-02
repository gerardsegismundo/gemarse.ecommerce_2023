import axios from 'axios'
import refreshAccessToken from './refreshToken'

const authAxios = axios.create({
  baseURL: '/auth',
  headers: {
    'Content-Type': 'application/json'
  }
})

authAxios.interceptors.request.use(
  config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`

    return config
  },
  error => Promise.reject(error)
)

authAxios.interceptors.response.use(
  res => res,
  async error => {
    const originalRequest = error.config

    if (error.response.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true

      await refreshAccessToken()
      return authAxios(originalRequest)
    }

    return Promise.reject(error)
  }
)

return authAxios
