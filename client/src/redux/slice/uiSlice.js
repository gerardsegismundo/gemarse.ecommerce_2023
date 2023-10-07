import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartDrawerIsOpen: false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setCartDrawerIsOpen: (state, action) => {
      state.cartDrawerIsOpen = action.payload
    }
  }
})

export const { setCartDrawerIsOpen } = uiSlice.actions

export default uiSlice.reducer
