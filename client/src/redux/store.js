import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './slice/uiSlice'
import cartReducer from './slice/cartSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    ui: uiReducer
  }
})

export default store
