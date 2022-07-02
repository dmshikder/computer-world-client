import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';



const Header = () => {
  

    return ( 
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Computer World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
        
         
          </Nav>
          <Nav>
          <Nav.Link as={Link}  to="/home">Home</Nav.Link>
      <Nav.Link as={Link}  to="/products">Products</Nav.Link>
      <Nav.Link as={Link}  to="/blogs">Blog</Nav.Link>
      <Nav.Link as={Link}  to="/about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;