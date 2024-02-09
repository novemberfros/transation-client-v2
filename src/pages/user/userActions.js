// File which is reponsible to dispatch action for updating state
// uses the actions given by slice

import { toast } from "react-toastify"
import { loginUser } from "../../axios/userAxiosHelper"
import { setIsAuthenticated, setIsAuthenticating, setUser } from "./userSlice"

// UI ----- [ACTION] ----- API
// Responsible for updating our global state

// login action
export const loginUserAction = (userObj) => async(dispatch) => {
  dispatch(setIsAuthenticating(true))

  const result = await loginUser(userObj)

  if(result.status === "error"){
    dispatch(setIsAuthenticating(false))
    toast.error("Invalid Login Credentials!")
    return
  }

  dispatch(setUser(result.data))
  dispatch(setIsAuthenticated(true))
  dispatch(setIsAuthenticating(false))
  toast.success(result.message)
}