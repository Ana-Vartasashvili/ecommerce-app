import { createSlice } from '@reduxjs/toolkit'

const menubarSlice = createSlice({
  name: 'menubar',
  initialState: { isShown: false },
  reducers: {
    toggle(state) {
      state.isShown = !state.isShown
    },
  },
})

export const menubarActions = menubarSlice.actions
export default menubarSlice.reducer
