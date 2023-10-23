import { round } from 'lodash'
import { createSlice } from '@reduxjs/toolkit'
import findItemIndexById from '../../utils/helpers/findItemByIndex'

const initialState = {
  cartItems: [],
  totalPrice: 0,
  itemsInCart: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const itemId = newItem._id

      console.log({ newItem })
      const itemIndex = findItemIndexById(state.cartItems, itemId)

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1
      } else {
        state.cartItems.push(newItem)
      }

      state.totalPrice = round(state.totalPrice + newItem.price, 2)
      state.itemsInCart++
    },

    incrementItem: (state, action) => {
      const itemId = action.payload

      const itemIndex = findItemIndexById(state.cartItems, itemId)

      state.cartItems[itemIndex].quantity += 1
      state.totalPrice = round(state.totalPrice + state.cartItems[itemIndex].price, 2)
      state.itemsInCart++
    },

    decrementItem: (state, action) => {
      const itemId = action.payload

      const itemIndex = findItemIndexById(state.cartItems, itemId)

      state.cartItems[itemIndex].quantity -= 1
      state.totalPrice = round(state.totalPrice - state.cartItems[itemIndex].price, 2)
      state.itemsInCart--
    },

    removeFromCart: (state, action) => {
      const { id, itemTotalPrice, itemQuantity } = action.payload

      console.log({ itemTotalPrice })

      state.cartItems = state.cartItems.filter(item => item.id !== id)
      state.totalPrice = round(state.totalPrice - itemTotalPrice, 2)
      state.itemsInCart = state.itemsInCart - itemQuantity
    }
  }
})

export const { addToCart, removeFromCart, incrementItem, decrementItem } = cartSlice.actions

export default cartSlice.reducer
