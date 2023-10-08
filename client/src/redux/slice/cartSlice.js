import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload.id

      const itemIndex = state.cartItems.findIndex(i => i.id === itemId)

      if (itemIndex >= 0) {
        state.cartItems = state.cartItems.map(item =>
          item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        state.cartItems = [...state.cartItems, action.payload]
      }
    },
    updateItemQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload

      const itemIndex = state.cartItems.findIndex(i => i.id === itemId)

      const updatedItem = { ...state.cartItems[itemIndex], quantity: newQuantity }

      state.cartItems[itemIndex] = updatedItem
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    }
  }
})

export const { addToCart, removeFromCart, updateItemQuantity } = cartSlice.actions

export default cartSlice.reducer
