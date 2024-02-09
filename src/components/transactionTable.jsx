import {Button, ButtonGroup, Form, Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {  deleteSelectedTransactionAction, getTransactionsAction } from '../pages/transaction/transactionActions';
import { useEffect, useState } from 'react';

const TransactionTable = ({userId}) => {
  const { transactions } = useSelector(state => state.transaction)

  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getTransactionsAction(userId))
  },[dispatch, userId])

  const expenseAmount = transactions.filter(transaction => transaction.type === "expense").map(item => item.amount).reduce((acc, item) => acc + item, 0)
  const incomeAmount = transactions.filter(transaction => transaction.type === "income").map(item => item.amount).reduce((acc, item) => acc + item, 0)

  const totalBalance = incomeAmount - expenseAmount

  // to have an array of transaction ids to be deleted
  const [selectedTransactionIds, setSelectedTransactionIds] = useState([])

  const toggleId = (id) => {
    setSelectedTransactionIds((prevIds) => {
      if (prevIds.includes(id)) {
        // If the ID is already in the array, remove it
        return prevIds.filter((i) => i !== id);
      } else {
        // If the ID is not in the array, add it
        return [...prevIds, id];
      }
    });
  };

  const handleOnDeleteSelected = () => {
    // call action to delete
    dispatch(deleteSelectedTransactionAction(selectedTransactionIds, userId))
    setSelectedTransactionIds([])
  }
  
const allTransactionIds = transactions.map(transaction => transaction._id)

const handleOnDeleteAll = () => {
  dispatch(deleteSelectedTransactionAction(allTransactionIds, userId))
}

return ( 
    <Table striped bordered hover className='text-center'>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Title</th>
          <th>Type</th>
          <th>Amount</th>
          <th>
            <ButtonGroup size="sm">
              <Button 
                variant="outline-danger"
                onClick={() => handleOnDeleteAll()}
                disabled={!allTransactionIds?.length}
              >
                Delete All
              </Button>
              <Button 
                variant="outline-warning" 
                onClick={() => handleOnDeleteSelected()}
                disabled={!selectedTransactionIds.length }
              >
                Delete Selected
              </Button>
            </ButtonGroup>
          </th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction, index) => {
          return(
            <tr key={transaction._id}>
              <td>{index + 1}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.title}</td>
              <td>{transaction.type}</td>
              <td>{
                transaction.type === "expense" 
                  ? <span className='text-danger'>${transaction.amount}</span> 
                  : <span className='text-success'>${transaction.amount}</span>
                }</td>
              <td>
                <Form name={transaction._id}>
                  <Form.Check
                   type="checkbox"
                   name={transaction._id}
                   onClick={() => toggleId(transaction._id)}
                  />
                </Form>
              </td>
            </tr>
          )
        })}
        

        <tr>
          <td colSpan={5} className="text-end mr-4">
              <strong>
                Total balance: 
                {totalBalance < 0 
                  ? <span className='text-danger'>-${totalBalance * -1}</span>
                  : <span className='text-success'>${totalBalance}</span>
                }
                </strong>
          </td>
          <td></td>
        </tr>
      </tbody>
    </Table>
   );
}
 
export default TransactionTable;