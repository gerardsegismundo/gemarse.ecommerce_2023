import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartDrawerIsOpen: false,
  subMenu: {
    isOpen: false,
    gender: null
  },
  mobileSubMenuIsOpen: false
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
    },
    toggleMobileSubMenu: state => {
      state.mobileSubMenuIsOpen = !state.mobileSubMenuIsOpen
    }
  }
})

export const { setCartDrawerIsOpen, setSubMenu, toggleMobileSubMenu } = uiSlice.actions

export default uiSlice.reducer
