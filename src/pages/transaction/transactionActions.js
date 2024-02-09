// Create  a transaction

import { toast } from "react-toastify"
import { createTransaction, deleteSelectedTransactions, getTransactions } from "../../axios/transactionAxiosHelper"
import { setCreating, setTransactions } from "./transactionSlice"

export const createTransactionAction = (transactionObj, userId) => async(dispatch) => {
  //dispatching actions to update state/store
  //calling axios

  dispatch(setCreating(true))

  const result = await createTransaction(transactionObj, userId)

  dispatch(setCreating(false))

  if(result.status === "error"){
    toast.error(result.message)
    return
  }

  const transactions = await getTransactions(userId)

  if(transactions.status === "success"){
    toast.success("Transaction Created!!")
    dispatch(setTransactions(transactions.data))
  }
}

export const deleteSelectedTransactionAction = (selectedIds, userId) => async(dispatch)=> {
  // axios call
  const result = await deleteSelectedTransactions(selectedIds, userId)

  if(result.status === "error"){
    toast.error(result.message)
    return
  }

  // success
  dispatch(getTransactionsAction(userId))
  toast.success("Selected transactions deleted")
}

export const getTransactionsAction = (userId) => async(dispatch) => {
  const transactions = await getTransactions(userId)

  if(transactions.status === "success"){
    dispatch(setTransactions(transactions.data))
  }

}