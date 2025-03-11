import React from "react";
import { Navbar,Container } from "react-bootstrap";
import {ReactComponent as Logo} from "../images/gallery.svg";

const navbarStyle = {
    backgroundColor: 'lightblue'
};

const Header = (props) => {
  return (
    <Navbar style={navbarStyle} variant="light" expand="lg" className="p-2">
      <Container className="justify-content-center">
        <Logo style = {{ maxWidth:'13rem'}}></Logo>
      </Container>
    </Navbar>
  );
};

export default Header;
