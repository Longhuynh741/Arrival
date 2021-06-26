import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../pages/api";

const Form = () => {
  const [formObject, setFormObject] = useState({});
  let history = useHistory();

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  const handleFormSubmit = (event) => {
      event.preventDefault();
      console.log(formObject)

    if (
      !formObject.companyName ||
      !formObject.eventName ||
        !formObject.location ||
        !formObject.moreDetails 
    ) {
      alert("Please fill out all fields to sign up");
      return;
    } else {
      api.create({
        companyName: formObject.companyName,
        eventName: formObject.eventName,
        location: formObject.location,
        moreDetails: formObject.moreDetails,
      })        .then((res) => {
        history.push("/Event");
      })
      }
  };
  return (
    <div>
      <div>
        <form className="form text-center" id="registerForm">
          <div className="registerInput">
            <input
              name="companyName"
              onChange={handleInputChange}
              type="text"
              placeholder="Company Name"
            />
          </div>
          <div className="registerInput">
            <input
              name="eventName"
              onChange={handleInputChange}
              type="text"
              placeholder="Event Name"
            />
          </div>
          <div className="registerInput">
            <input
              name="location"
              onChange={handleInputChange}
              type="text"
              placeholder="Location"
            />
          </div>
          <div className="registerInput">
            <input
              name="moreDetails"
              onChange={handleInputChange}
              type="text"
              placeholder="More Details"
            />
          </div>
          <button id="registerBtn" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
 