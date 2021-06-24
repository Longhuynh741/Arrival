import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";
import useFormFields from '@usereact/use-form-fields';
const AccountCreationHost = () => {
  const [fields, handleFieldChange] = useState({
      email: "",
      password: "",
      confirmPassword: "",
  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
//   function validateForm() {
//     return (
//         fields.email.length > 0 && 
//         fields.password.length > 0 &&
//         fields.password === fields.confirmPassword
//     );
//   }
 async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setNewUser("test");
    setIsLoading(false);
  }
  return (
    <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" size="lg">
            <Form.Label>Eamil</Form.Label>
            <Form.Control
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
            />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
            <Form.Label>Password</Form.Label>
            <Form.Control
            autoFocus
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
            />
        </Form.Group>
        <Form.Group controlId="confirmPassword" size="lg">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
            autoFocus
            type="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
            />
        </Form.Group>
        <Button variant="info" type="submit">
        {/* <Button variant="info" type="submit" disabled={!validateForm()}> */}
          Sign Up
        </Button>
      </Form>
  );
}
export default AccountCreationHost;