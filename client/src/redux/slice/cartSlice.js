import { round } from 'lodash'
import { createSlice } from '@reduxjs/toolkit'
import findItemIndexById from '../../utils/helpers/findItemByIndex'

const initialState = {
  cartItems: [
    {
      _id: '9XS',
      name: 'navy polo',
      imgSrc: '/static/media/navy-polo.19ba410144b83bca212b.jpg',
      price: 34.99,
      stock: 5,
      size: 'XS',
      quantity: 1
    },
    {
      _id: '7XL',
      name: 'black leather jacket',
      imgSrc: '/static/media/leather-jacket.8c22ebd36bd2386beb8d.jpg',
      price: 154.99,
      stock: 30,
      size: 'XL',
      quantity: 1
    },
    {
      _id: '7L',
      name: 'black leather jacket',
      imgSrc: '/static/media/leather-jacket.8c22ebd36bd2386beb8d.jpg',
      price: 154.99,
      stock: 15,
      size: 'L',
      quantity: 1
    }
  ],
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
      const { _id, itemTotalPrice, itemQuantity } = action.payload

      state.cartItems = state.cartItems.filter(item => item._id !== _id)
      state.totalPrice = round(state.totalPrice - itemTotalPrice, 2)
      state.itemsInCart = state.itemsInCart - itemQuantity
    }
  }
})

export const { addToCart, removeFromCart, incrementItem, decrementItem } = cartSlice.actions

export default cartSlice.reducer
