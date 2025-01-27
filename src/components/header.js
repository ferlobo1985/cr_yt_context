import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

const Header = () => (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">My app</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">

                <LinkContainer to="/">
                    <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/cars">
                    <Nav.Link>Cars</Nav.Link>
                </LinkContainer>

            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header;