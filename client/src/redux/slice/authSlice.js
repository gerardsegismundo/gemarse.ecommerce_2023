import { createSlice } from '@reduxjs/toolkit'
import { loginAsync, logoutAsync } from '../thunk/authThunk'

const initialState = {
  isAuthenticated: false,
  accessToken: '',
  user: {}
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
        }
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
