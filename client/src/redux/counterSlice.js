import { createSlice } from '@reduxjs/toolkit'

const uiState = {
  cartDrawerIsClosed: true
}

const uiReducers = {
  setCartDrawerIsClosed: (state, action) => {
    state.cartDrawerIsClosed = action.payload
  }
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { ...uiState },
  reducers: { ...uiReducers }
})

export const { setCartDrawerIsClosed } = counterSlice.actions

export default counterSlice.reducer
