import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const TopNavbar = ({ userName }) => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Transaction History</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: {userName}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;