import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

import logo from "../../../images/medicare-logo.png"

const Header = () => {
    return (
        <div className="mb-5 pb-5">
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link as={HashLink} className="text-white" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/healthGuideLine">Health Guide Line</Nav.Link>
                        <Nav.Link as={HashLink} className="text-white" to="/login">Login</Nav.Link>
                        <Navbar.Text className="text-primary">
                            Signed in as:
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;