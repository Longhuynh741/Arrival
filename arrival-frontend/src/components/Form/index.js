import React, { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import api from "../../pages/api";
import Container from "react-bootstrap/Container";

require("../../assets/css/CreateEvent.css");

const Form = () => {
  const [formObject, setFormObject] = useState({});
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(formObject);

    api
      .create({
        mainHost: formObject.mainHost,
        eventName: formObject.eventName,
        location: formObject.location,
        moreDetails: formObject.moreDetails,
      })
      .then((res) => {
        history.push("/Event");
      });
  };

  const handleGoBack = (event) => {
    history.push("/Event");

  }
  return (
    <div>
      <Container>
        <form className="form text-center formContainer" id="registerForm">
          <InputGroup className="mb-3">
            <FormControl
              name="mainHost"
              onChange={handleInputChange}
              type="text"
              placeholder="Main Host"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              name="eventName"
              onChange={handleInputChange}
              type="text"
              placeholder="Event Name"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              name="location"
              onChange={handleInputChange}
              type="text"
              placeholder="Location"
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <FormControl
              as="textarea"
              name="moreDetails"
              onChange={handleInputChange}
              type="textarea"
              placeholder="More Details"
            />
          </InputGroup>

          <button id="registerBtn" onClick={handleFormSubmit}>
            Submit
          </button>
          <button id="registerBtn" onClick={handleGoBack}>
            Go Back
          </button>
        </form>
      </Container>
    </div>
  );
};

export default Form;
