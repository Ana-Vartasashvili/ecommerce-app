import { configureStore } from '@reduxjs/toolkit'
import menubarReducer from './menubar-slice'
import productsReducer from './products-slice'
import cartReducer from '../store/cart-slice'

const Store = configureStore({
  reducer: {
    menubar: menubarReducer,
    products: productsReducer,
    cart: cartReducer,
  },
})

export default Store
