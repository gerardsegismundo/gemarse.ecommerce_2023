import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartDrawerIsOpen: false,
  subMenu: {
    isOpen: false,
    gender: null
  }
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCartDrawerIsOpen: (state, action) => {
      state.cartDrawerIsOpen = action.payload
    },
    setSubMenu: (state, action) => {
      state.subMenu = action.payload
    }
  }
})

export const { setCartDrawerIsOpen, setSubMenu } = uiSlice.actions

export default uiSlice.reducer
