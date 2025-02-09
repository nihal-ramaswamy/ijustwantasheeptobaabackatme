import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface NavBarState {
  value: { name: string, href: string, current: boolean }[]
}

const initialState: NavBarState = {
  value: [
    { name: 'About', href: '/', current: true },
    { name: 'Sheep', href: '/sheep', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ],
}

export const navigateSlice = createSlice({
  name: 'navigate',
  initialState,
  reducers: {
    navigatePage: (state, action: PayloadAction<string>) => {
      const newStateValue = [...state.value]
      for (let i = 0; i < newStateValue.length; i++) {
        if (newStateValue[i].href == action.payload) {
          newStateValue[i].current = true;
        } else {
          newStateValue[i].current = false;
        }
      }

      state.value = newStateValue;
    },
  },
})

export const { navigatePage } = navigateSlice.actions

export default navigateSlice.reducer
