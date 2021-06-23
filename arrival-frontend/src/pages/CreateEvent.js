import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [mainHost, setMainHost] = useState("");
  const [eventQuestion, setEventQuestion] = useState("");
  const [eventDetails, setEventDetails] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEventName">
              <Form.Label>Event Name</Form.Label>
              <Form.Control type="text" placeholder="Name of Your Event" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridMainHost">
              <Form.Label>Main Host</Form.Label>
              <Form.Control type="text" placeholder="John Doe" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Location</Form.Label>
              <Form.Control placeholder="1234 Mian St." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Location Cont..</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridQuestions">
              <Form.Label>Questions</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDetails">
              <Form.Label>Details</Form.Label>
              <Form.Control />
            </Form.Group>
          </Row>

          <Button variant="info" type="submit">
            Create Your Event
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default CreateEvent;