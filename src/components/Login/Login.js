import React, { useState } from 'react';
import { Button, Form } from "react-bootstrap";
import useFirebase from '../../hooks/useFirebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
    const [account, setAccount] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { handleGoogleSignIn, error, accountRegistration, setError, accountLogin } = useFirebase();



    const handleCheckBox = (e) => {
        setAccount(e.target.checked);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    // handle submit button form 
    const handleSubmitButton = (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setError("Password should be at least 6 characters");
            return;

        }
        // password strength checking
        if (!/(?=.*[A-Z])(?=.*[0-9])/.test(password)) {
            setError("Password must have one uppercase letters and one digit");
            return;
        }


        account ? accountLogin(email, password) : accountRegistration(email, password);


    }

    return (
        <>

            <Form onSubmit={handleSubmitButton} className="text-start ms-5">
                <h2>{account ? "Please Login" : "Please SignUp"}</h2>
                <Form.Group className="mb-3 w-50">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check onClick={handleCheckBox} type="checkbox" label="Already Have An Account" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    {account ? "Login" : "Sign Up"}
                </Button>

            </Form>

            <br />
            <h2 className="text-danger">{error}</h2>
            <Button className="bg-warning text-info fw-bold border-0 fs-5" onClick={handleGoogleSignIn}>
                <FontAwesomeIcon className="me-2" icon={faGoogle}></FontAwesomeIcon> Google Sign In</Button>
        </>

    );
};

export default Login;