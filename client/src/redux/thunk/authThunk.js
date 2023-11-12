import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import authenticatedAxios from '../../utils/helpers/authenticatedAxios'

const loginAsync = createAsyncThunk('auth/login', async ({ formData, setError }) => {
  try {
    const response = await axios.post('/auth/login', formData)

    console.log({ login: response })
    return response.data.accessToken
  } catch (error) {
    if (error.response && error.response.data) {
      setError({ ...error, [error.response.data.name]: error.response.data.message })
    }

    console.log({ loginError: error })
  }
})

const refreshAccessToken = createAsyncThunk('auth/access_token', async () => {
  console.log('REFRESH_TOKEN!')
  try {
    const response = await authenticatedAxios.post('/auth/access_token')

    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
})

const getCurrentUser = createAsyncThunk('auth/current_user', async () => {
  try {
    const response = await authenticatedAxios.post('/auth/current_user')
    // @TODO display current user on the dashboard
    // and add firstname to the register data

    return response.data.user
  } catch (error) {
    console.log(error)
  }
})

const logoutAsync = createAsyncThunk('auth/logout', async () => {
  const response = await axios.post('/auth/logout')
  return response.data
})

export { loginAsync, logoutAsync, refreshAccessToken, getCurrentUser }
