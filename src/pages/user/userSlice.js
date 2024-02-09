// Slice File build using redux-toolkit
// 1. Initial State
// 2. Reducers

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isAuthenticating: false,
  isAuthenticated: false,
}

const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
    setUser: (state, { payload }) => {
      state.user = payload
    },
    setIsAuthenticating: (state, { payload }) => {
      state.isAuthenticating = payload
    },
    setIsAuthenticated: (state, { payload }) => {
      state.isAuthenticated = payload
    }
   }
})

const {reducer: userReducer, actions} = userSlice

export const { setUser, setIsAuthenticated, setIsAuthenticating } = actions
export default userReducer