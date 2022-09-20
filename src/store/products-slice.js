import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
}

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
      state.totalAmount += existingItem.quantity * existingItem.totalPricece
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

    getTotals(state) {
      const { totalAmount, totalQuantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, quantity } = cartItem
          const itemTotal = price * quantity

          cartTotal.totalAmount += itemTotal
          cartTotal.totalQuantity += quantity

          return cartTotal
        },
        {
          totalAmount: 0,
          totalQuantity: 0,
        }
      )
      state.totalPrice = totalAmount
      state.totalQuantity = totalQuantity
    },
  },
})

export default ProductsSlice.reducer
export const ProductsActions = ProductsSlice.actions
