import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Body from "../Components/Body";
import Form from "react-bootstrap/Form";
import InputField from "../Components/InputField";
import Button from "react-bootstrap/Button";

export default function LoginPage() {
    const [formErrors, setFormErrors] = useState({});
    const usernameField = useRef();
    const passwordField = useRef();

    useEffect(() => {
        usernameField.current.focus();
    }, []);
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        const username = usernameField.current.value;
        const password = passwordField.current.value;

        const errors = {};
        if (!username) {
            errors.username = "Username must not be empty.";
        }
        if (!password) {
            errors.password = "Password must not be empty";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length > 0) {
            return;
        }

    };

    return(
        <Body>
            <h1>Login</h1>
            <Form onSubmit={onSubmit}>
                <InputField name='username' label='Username or email address' error={formErrors.username} fieldRef={usernameField} />
                <InputField name='password' label='Password' type='password' error={formErrors.password} fieldRef={passwordField} />
                <Button variant='primary' type='submit'>Login</Button>
            </Form>
            <hr />
            <p>Don't have an account? <Link to="/register">Register here</Link>!</p>
        </Body>
    );
}