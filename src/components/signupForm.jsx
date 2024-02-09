import { Button, Form } from "react-bootstrap";
import CustomInput from "./customInput";
import { useState } from "react";
import { createUser } from "../axios/userAxiosHelper";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  name: '',
  email: '',
  password: '',
  confirm_password: ''
}

const SignupForm = () => {
  const [formData, setFormData] = useState(initialFormData)

  const {name, email, password, confirm_password} = formData

  const handleOnChange = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const navigate = useNavigate()

  const handleOnSubmit = async(e) => {
    e.preventDefault()

    // axios call
    const result = await createUser(formData)

    //error
    if(result.status === "error"){
      toast.error(result.message)
    }

    // success
    toast.success(result.message)
    navigate("/")
  }


  return ( 
    <Form onSubmit={(e) => handleOnSubmit(e)}>
      <CustomInput 
        label = "Name"
        inputAttributes= {{
          type: 'text',
          name: 'name',
          value: name,
          placeholder: 'Enter you name',
          required: true,
        }}
        handleOnChange= {handleOnChange}
      />

      <CustomInput 
        label = "Email"
        handleOnChange= {handleOnChange}
        inputAttributes= {{
          type: 'email',
          name: 'email',
          value: email,
          placeholder: 'Enter your Email',
          required: true
        }}
      />

      <CustomInput 
        label = "Password"
        handleOnChange= {handleOnChange}
        inputAttributes= {{
          type: 'password',
          name: 'password',
          value: password,
          placeholder: 'Enter a Password',
          required: true
        }}
      />

      <CustomInput 
        label = "Confirm Password"
        handleOnChange= {handleOnChange}
        inputAttributes= {{
          type: 'password',
          name: 'confirm_password',
          value: confirm_password,
          placeholder: 'Enter Password',
          required: true
        }}
      />

      <Button variant="primary" type="submit">Sign up</Button>
    </Form>
   );
}
 
export default SignupForm;