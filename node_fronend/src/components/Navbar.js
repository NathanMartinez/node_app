import { Navbar, Nav } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" style={{padding: ".8rem"}}>
        <Navbar.Brand href="#home">Slick</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default Navigation;
