import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="header navbar sticky-top"
    >
      <Container>
        <Navbar.Brand href="#home">Computer World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/blogs">
              Blog
            </Nav.Link>
            
            {user && (
              <>
                <Nav.Link as={Link} to="manageItems">
                  Manage Items
                </Nav.Link>
                <Nav.Link as={Link} to="addItem">
                  Add Item
                </Nav.Link>
                <Nav.Link as={Link} to="myItems">
                  My Items
                </Nav.Link>
              </>
            )}

            {user ? (
              <button className="signout" onClick={handleSignOut}>
                {" "}
                sign out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login/Register
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
