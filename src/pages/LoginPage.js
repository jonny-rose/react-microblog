import { useState } from 'react';
import Body from "../Components/Body";
import Form from "react-bootstrap/Form";
import InputField from "../Components/InputField";
import Button from "react-bootstrap/Button";

export default function LoginPage() {
    const [formErrors, setFormErrors] = useState({});
    
    const onSubmit = (ev) => {
        ev.preventDefault();
        console.log('handle form here');
    };

    return(
        <Body>
            <h1>Login</h1>
            <Form onSubmit={onSubmit}>
                <InputField name='username' label='Username or email address' error={formErrors.username} />
                <InputField name='password' label='Password' type='password' error={formErrors.password} />
                <Button variant='primary' type='submit'>Login</Button>
            </Form>
        </Body>
    );
}