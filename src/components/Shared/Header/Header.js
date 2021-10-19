import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import logo from "../../../images/medicare-logo.png"
import useAuth from '../../../hooks/useAuth';

const Header = () => {


    const { user, logOut } = useAuth();

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

                        {
                            Object.keys(user).length !== 0 ? <Button onClick={logOut}>Log Out</Button> : <Nav.Link as={HashLink} className="text-white" to="/login">Login </Nav.Link>
                        }

                        {
                            user.displayName && <Navbar.Text className="text-primary ms-2">
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>{user.displayName}
                            </Navbar.Text>
                        }
                        {
                            user.email && <Navbar.Text className="text-primary ms-2">
                                <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>{user.email}
                            </Navbar.Text>
                        }

                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;