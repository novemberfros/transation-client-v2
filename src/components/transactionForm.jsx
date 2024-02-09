import { Form, Row, Col, Button } from "react-bootstrap";
import CustomInput from "./customInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTransactionAction } from "../pages/transaction/transactionActions";

const initialFormData = {
  title: '',
  type: 'expense',
  date: null,
  amount: 0,
}

const TransactionForm = ({ userId }) => {
  const [formData, setFormData] = useState(initialFormData)

  const {title, date, amount, type} = formData

  const handleOnChange = (e) => {
    const {name, value} = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const dispatch = useDispatch()

   const handleOnSubmit = (e) => {
    e.preventDefault()

    dispatch(createTransactionAction(formData, userId))

    // clear for data logic
    setFormData(initialFormData)
   }

  return ( 
    <Form onSubmit={(e) => handleOnSubmit(e)}>
      <Row>
        <Col>
            <CustomInput 
            label = "Title"
            handleOnChange= {handleOnChange}
            inputAttributes= {{
              type: 'text',
              name: 'title',
              value: title,
              placeholder: 'Enter transaction title',
              required: true
            }}
          />
        </Col>
        <Col>
          <Form.Group>
            <Form.Label className="fw-bold">Type</Form.Label>
            <Form.Select 
              name="type" 
              value={type}
              onChange= {(e) => handleOnChange(e)}
              >
              <option value="expense">Expense</option>
              <option value="income">Income</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col>
          <CustomInput
            label="Date"
            handleOnChange= {handleOnChange}
            inputAttributes= {{
              type: 'date',
              name: 'date',
              value: date,
              required: true
            }}
          />
        </Col>

        <Col>
        <CustomInput 
        label = "Amount"
        handleOnChange= {handleOnChange}
        inputAttributes= {{
          type: 'number',
          name: 'amount',
          min: 1,
          value: amount,
          placeholder: 'Enter transaction amount',
          required: true
        }}
      />
        </Col>
      </Row>

      <Row>
        <Button variant="primary" type="submit">Add Transaction</Button>
      </Row>
    </Form>
   );
}
 
export default TransactionForm;