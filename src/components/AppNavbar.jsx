import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const AppNavbar = () => {
  const cart = useSelector(state => state.cart);
return (
  
    <>
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container>
        <Link to="/" className='navbar-brand'>CartApp</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Products</Link>
            <Link to="/Cart" className='nav-link'>Cart - {cart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
)
}

export default AppNavbar