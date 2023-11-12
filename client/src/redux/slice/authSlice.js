import { createSlice } from '@reduxjs/toolkit'
import { getCurrentUser, loginAsync, logoutAsync, refreshAccessToken } from '../thunk/authThunk'

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  user: {},
  status: ''
}

if (localStorage.accessToken) {
  initialState.accessToken = localStorage.getItem('accessToken')
  initialState.isAuthenticated = true
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => {
        if (action.payload) {
          localStorage.setItem('accessToken', action.payload)

          state.isAuthenticated = true
          state.accessToken = action.payload
          state.status = 'success'
        }
      })

      .addCase(loginAsync.pending, (state, action) => {
        state.status = 'loading'
      })

      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed'
      })

      .addCase(refreshAccessToken.fulfilled, (state, action) => {
        if (action.payload) {
          localStorage.setItem('accessToken', action.payload)

          state.isAuthenticated = true
          state.accessToken = action.payload
          state.status = 'success'
        }
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload
      })

      .addCase(logoutAsync.fulfilled, (state, action) => {
        localStorage.removeItem('accessToken')
        state.user = {}
        state.isAuthenticated = false
        state.accessToken = ''
      })
  }
})

export default authSlice.reducer
