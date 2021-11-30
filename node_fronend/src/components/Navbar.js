import { NavLink } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Navbar.Brand as={NavLink} to="/">
        Slick
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        <Nav>
          <Button
            as={NavLink}
            to="/login"
            variant="outline-primary"
            style={{ marginRight: ".5rem" }}
          >
            Log in
          </Button>
          <Button as={NavLink} to="/signup" variant="primary">
            Sign up
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
