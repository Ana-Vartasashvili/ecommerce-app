import { createSlice } from '@reduxjs/toolkit'

const ProductsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProductData(state, action) {
      return (state = action.payload)
    },
  },
})

export default ProductsSlice.reducer
export const ProductsActions = ProductsSlice.actions
