import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  data: null
}

if (localStorage.access_token) {
  initialState.accessToken = localStorage.getItem('accessToken')
  initialState.isAuthenticated = true
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})

export default authSlice.reducer
