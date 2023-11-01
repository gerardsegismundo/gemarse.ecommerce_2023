import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // isAuthenticated: false,
  // accessToken: '',
  // data: null
  isAuthenticated: true,
  accessToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDFmOGNiNTk2MWZjNmY4M2QzMWM1MiIsImlhdCI6MTY5ODgyMjU5MiwiZXhwIjoxNjk4ODIyNTkyfQ.RHNK74kRoo6mgl9usmN0HZdZXB2AUnfy_Z9BskbnfFo',
  data: null
}

if (localStorage.access_token) {
  initialState.accessToken = localStorage.getItem('accessToken')
  initialState.isAuthenticated = true
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action.payload)
      localStorage.setItem('accessToken', action.payload)

      initialState = {
        ...initialState,
        isAuthenticated: true,
        accessToken: action.payload
      }
    },
    getCurrentUser: (state, action) => {}
  }
})

export default authSlice.reducer
