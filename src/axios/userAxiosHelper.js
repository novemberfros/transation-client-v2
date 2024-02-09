import axios from "axios";

// Server URL
const API_BASE_URL = "http://localhost:8000"

const userPath = "/api/user"

// Signup | User registration
export const createUser = (userObj) => {
  const response = axios.post(API_BASE_URL + userPath, userObj)
                      .then(res => res.data)
                      .catch(error => console.log(error))

  return response
}

// Signup | User registration
export const loginUser = (userObj) => {
  const response = axios.post(API_BASE_URL + userPath + "/login", userObj)
                      .then(res => res.data)
                      .catch(error => console.log(error))

  return response
}