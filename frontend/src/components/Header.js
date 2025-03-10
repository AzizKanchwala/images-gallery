import React from "react";
import { Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="light">
            <Navbar.Brand href="/">Gallery</Navbar.Brand>
        </Navbar>
    )
}

export default Header;