import { round } from 'lodash'
import { createSlice } from '@reduxjs/toolkit'
import findItemIndexById from '../../utils/helpers/findItemByIndex'

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalItemsInCart: 0
}

if (localStorage.cartState) {
  const { cartItems, totalPrice, totalItemsInCart } = JSON.parse(localStorage.getItem('cartState'))

  initialState.cartItems = cartItems
  initialState.totalPrice = parseFloat(totalPrice)
  initialState.totalItemsInCart = parseInt(totalItemsInCart)
}

const updateLocalStorage = ({ cartItems, totalPrice, totalItemsInCart }) => {
  localStorage.setItem('cartState', JSON.stringify({ cartItems, totalPrice, totalItemsInCart }))
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload
      const itemId = newItem._id

      const itemIndex = findItemIndexById(state.cartItems, itemId)

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1
      } else {
        state.cartItems.push(newItem)
      }

      state.totalPrice = round(state.totalPrice + newItem.price, 2)
      state.totalItemsInCart++

      updateLocalStorage(state)
    },

    incrementItem: (state, action) => {
      const itemId = action.payload

      const itemIndex = findItemIndexById(state.cartItems, itemId)

      state.cartItems[itemIndex].quantity += 1
      state.totalPrice = round(state.totalPrice + state.cartItems[itemIndex].price, 2)
      state.totalItemsInCart++

      updateLocalStorage(state)
    },

    decrementItem: (state, action) => {
      const itemId = action.payload

      const itemIndex = findItemIndexById(state.cartItems, itemId)

      state.cartItems[itemIndex].quantity -= 1
      state.totalPrice = round(state.totalPrice - state.cartItems[itemIndex].price, 2)
      state.totalItemsInCart--

      updateLocalStorage(state)
    },

    removeFromCart: (state, action) => {
      const { _id, itemTotalPrice, itemQuantity } = action.payload

      state.cartItems = state.cartItems.filter(item => item._id !== _id)
      state.totalPrice = round(state.totalPrice - itemTotalPrice, 2)
      state.totalItemsInCart = state.totalItemsInCart - itemQuantity

      updateLocalStorage(state)
    }
  }
})

export const { addToCart, removeFromCart, incrementItem, decrementItem } = cartSlice.actions
export default cartSlice.reducer
