import { configureStore } from '@reduxjs/toolkit'
import menubarSlice from './menubar-slice'

const Store = configureStore({
  reducer: menubarSlice,
})

export default Store
