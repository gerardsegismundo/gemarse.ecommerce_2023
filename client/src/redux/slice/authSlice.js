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

const tokenUpdate = (state, action) => {
  if (action.payload) {
    localStorage.setItem('accessToken', action.payload)
    Object.assign(state, {
      isAuthenticated: true,
      accessToken: action.payload,
      status: 'success'
    })
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAsync.fulfilled, (state, action) => tokenUpdate(state, action))

      .addCase(loginAsync.pending, state => {
        state.status = 'loading'
      })

      .addCase(loginAsync.rejected, state => {
        state.status = 'failed'
      })

      .addCase(refreshAccessToken.fulfilled, (state, action) => tokenUpdate(state, action))
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload
      })

      .addCase(logoutAsync.fulfilled, state => {
        localStorage.removeItem('accessToken')
        Object.assign(state, {
          user: {},
          isAuthenticated: false,
          accessToken: ''
        })
      })
  }
})

export default authSlice.reducer
