import React from "react";
import Form from "../components/Form/index"
require("../assets/css/CreateEvent.css");


const CreateEvent = () => {

  return (
    <div className="container-fluid createEventContainer">
      <div className ="row">
        <div className ="col-md-12 text-center">
          <h2 id="login-title"> Create an Event </h2>
          <Form />
        </div>
      </div>
      </div>  
  );
};

export default CreateEvent;
