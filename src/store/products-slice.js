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

      if (!existingItem) {
        const newItem = state.items.find((item) => item.id === action.payload)
        state.cartItems.push(newItem)
        newItem.quantity = 1
      } else {
        existingItem.quantity++
      }
    },

    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },

    increaseQuantity(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      existingItem.quantity++
    },

    decreaseQuantity(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload
      )
      existingItem.quantity--

      if (existingItem.quantity < 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== existingItem.id
        )
      }
    },
  },
})

export default ProductsSlice.reducer
export const ProductsActions = ProductsSlice.actions
