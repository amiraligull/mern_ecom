import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Header = () => {
  return (
    <div>
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">MERN</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Products</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link href="#pricing">
                  <li className="fas fa-shopping-cart"></li>Cart
                </Nav.Link>
                <Nav.Link href="#deetslogin">login</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      ;
    </div>
  );
};

export default Header;
