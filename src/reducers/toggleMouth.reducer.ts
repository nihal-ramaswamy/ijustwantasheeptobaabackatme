
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ToggleState {
  value: boolean
}

const initialState: ToggleState = {
  value: false,
}

export const toggleMouthSlice = createSlice({
  name: 'toggleMouth',
  initialState,
  reducers: {
    toggleMouth: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { toggleMouth } = toggleMouthSlice.actions

export default toggleMouthSlice.reducer
