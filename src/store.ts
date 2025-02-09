import { configureStore } from '@reduxjs/toolkit'
import navigateReducer from './reducers/navbar.reducer'
import toggleReducer from './reducers/toggleMouth.reducer'

export const store = configureStore({
  reducer: {
    navigator: navigateReducer,
    toggleMouth: toggleReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
