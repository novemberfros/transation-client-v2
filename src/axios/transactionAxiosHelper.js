import axios from "axios";

// Server URL
const API_BASE_URL = "http://localhost:8000"

const transactionPath = "/api/transaction"

// create transactions
export const createTransaction = (transactionObj, userId) => {
  const response = axios.post(API_BASE_URL + transactionPath, transactionObj, {
    headers: {
    authorization: userId,
   }
  })
                      .then(res => res.data)
                      .catch(error => console.log(error))

  return response
}

// get all transactions
export const getTransactions = (userId) => {
  const response = axios.get(
      API_BASE_URL + transactionPath, 
      {
        headers: {
        authorization: userId,
       }
      })
                      .then(res => res.data)
                      .catch(error => console.log(error))

  return response
}

// delete selected transactions
export const deleteSelectedTransactions = (selectedIds, userId) => {

  console.log("id", userId);
  const response = axios.delete(
      API_BASE_URL + transactionPath, 
      {
        headers: {
          authorization: userId,
       },
       data: {
        selectedIds
       }
      },
      )
        .then(res => res.data)
        .catch(error => console.log(error))

  return response
}
