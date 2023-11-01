import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slice/uiSlice'
import cartReducer from './slice/cartSlice'
import authReducer from './slice/authSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer,
    auth: authReducer
  }
})

export default store
