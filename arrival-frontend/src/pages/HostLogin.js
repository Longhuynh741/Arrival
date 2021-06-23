import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const HostLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <h1>Please Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Eamil</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="info" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
};

export default HostLogin;
