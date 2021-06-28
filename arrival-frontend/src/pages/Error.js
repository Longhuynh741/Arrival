import React, { useState } from "react";
import { useHistory } from "react-router-dom";

require("../assets/css/Error.css");



function Error() {


    let history = useHistory();


    function handleGoBack() {
        history.push("/")
    }

    return (
      <div className="jumbotron herox">
            <h1 id="heroText"> no events found </h1>
            <button onClick={handleGoBack}> Go Back</button>
      </div>
    );
  }
  
export default Error;