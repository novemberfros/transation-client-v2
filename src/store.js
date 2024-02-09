import { configureStore } from '@reduxjs/toolkit'

import userReducer from './pages/user/userSlice'
import transactionReducer from './pages/transaction/transactionSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    transaction: transactionReducer
  }
})

export default store