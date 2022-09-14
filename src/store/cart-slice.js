import { createSlice } from '@reduxjs/toolkit'

const initialState = { isShown: false }

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown
    },
  },
})

export default CartSlice.reducer
export const cartActions = CartSlice.actions
