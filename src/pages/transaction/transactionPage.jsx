import { Container } from "react-bootstrap";
import TopNavbar from "../../components/topNavbar";
import { useSelector } from "react-redux";
import TransactionForm from "../../components/transactionForm";
import TransactionTable from "../../components/transactionTable";

const TransactionPage = () => {
  const {user} = useSelector(state => state.user)
  
  return ( 
    <div>
      <TopNavbar userName= {user?.name} />

    <>
      <Container className="border p-4 shadow-lg">
        <TransactionForm userId = {user?._id}/>
      </Container>
        
      <Container className="border p-4 mt-4">
        <TransactionTable userId={user?._id} />
      </Container>
      </>
    </div>
   );
}
 
export default TransactionPage;