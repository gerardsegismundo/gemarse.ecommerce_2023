import { createSlice } from '@reduxjs/toolkit'
import { loginAsync } from '../thunk/authThunk'
impo

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  user: {}
}

if (localStorage.access_token) {
  initialState.accessToken = localStorage.getItem('accessToken')
  // initialState.isAuthenticated = true
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        localStorage.setItem('accessToken', action.payload)

        state.isAuthenticated = true
        state.accessToken = action.payload
      })
      .addCase(logoutAsync.fulfilled, (state, action) => {
        localStorage.removeItem('accessToken')
        state.user = {}
        state.isAuthenticated = false
        state.accessToken = ''
      })
  }
})

export const { login, logout, setCurrentUser } = authSlice.actions
export default authSlice.reducer
