import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  transactions: [],
  creating: false,
}

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactions: (state, { payload }) => {
      state.transactions = payload
    },
    setCreating: (state, { payload }) => {
      state.creating = payload
    }
  }
})

const { reducer: transactionReducer, actions} = transactionSlice

export const { setTransactions, setCreating } = actions
export default transactionReducer