import 'bootstrap/dist/css/bootstrap.min.css';
import SignupPage from './pages/user/signupPage';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/user/loginPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TransactionPage from './pages/transaction/transactionPage';
import { PrivateRoute } from './components/privateRoute';

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path='/transaction' element={
        <PrivateRoute>
          <TransactionPage />
        </PrivateRoute>
      } />
    </Routes>

    <ToastContainer />
    </>
  )
}

export default App
