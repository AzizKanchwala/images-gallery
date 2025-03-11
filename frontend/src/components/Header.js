import React from "react";
import { Navbar,Container } from "react-bootstrap";

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} variant="light" expand="lg" className="p-2">
      <Container className="justify-content-center">
        <Navbar.Brand className="mx-auto">{props.title}</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
