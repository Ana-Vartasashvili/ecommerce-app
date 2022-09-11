import { configureStore } from '@reduxjs/toolkit'
import menubarReducer from './menubar-slice'
import productsReducer from './products-slice'

const Store = configureStore({
  reducer: { menubar: menubarReducer, products: productsReducer },
})

export default Store
