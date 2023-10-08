import { createSlice } from '@reduxjs/toolkit'
import findItemIndexById from '../../utils/helpers/findItemByIndex'
import toFixedNumber from '../../utils/helpers/toFixedNumber'

const initialState = {
  cartItems: [],
  totalPrice: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const itemId = newItem.id

      const itemIndex = findItemIndexById(state.cartItems, itemId)

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1
      } else {
        state.cartItems.push(newItem)
      }

      state.totalPrice = toFixedNumber(state.totalPrice + newItem.price, 2)
    },

    incrementItem: (state, action) => {
      const itemId = action.payload

      const itemIndex = findItemIndexById(state.cartItems, itemId)

      state.cartItems[itemIndex].quantity += 1
      state.totalPrice = toFixedNumber(state.totalPrice + state.cartItems[itemIndex].price, 2)
    },

    decrementItem: (state, action) => {
      const itemId = action.payload

      const itemIndex = findItemIndexById(state.cartItems, itemId)

      state.cartItems[itemIndex].quantity -= 1
      state.totalPrice = toFixedNumber(state.totalPrice - state.cartItems[itemIndex].price, 2)
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload)
    }
  }
})

export const { addToCart, removeFromCart, incrementItem, decrementItem } = cartSlice.actions

export default cartSlice.reducer
