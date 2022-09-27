import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products-slice'
import cartReducer from '../store/cart-slice'
import menubarReducer from './menubar-slice'

const Store = configureStore({
  reducer: {
    menubar: menubarReducer,
    products: productsReducer,
    cart: cartReducer,
  },
})

export default Store
