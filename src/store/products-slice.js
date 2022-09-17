import { createSlice } from '@reduxjs/toolkit'

const initialState = { items: [], cartItems: [] }

const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductData(state, action) {
      state.items = action.payload
    },
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      const newItem = state.items.find((item) => item.id === action.payload)

      if (!existingItem) {
        state.cartItems.push(newItem)
        newItem.quantity = 1
      } else {
        existingItem.quantity++
      }
    },
  },
})

export default ProductsSlice.reducer
export const ProductsActions = ProductsSlice.actions
