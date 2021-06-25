import React from "react";
import { useHistory } from "react-router-dom";


require("./Homepage.css");

function Homepage() {


  let history = useHistory();

  function handleSearch() {
    history.push("/Event");
  }

  function handleLogin() {
    history.push("/Login");
  }

  return (
    <div className="jumbotron hero">
      <h1> Welcome To Arrival </h1>
      <h2> Search For Your Company</h2>
      <button onClick={() => handleSearch()}> Search </button>
      <button onClick={() => handleLogin()}> Login as Host</button>
    </div>
  );
}

export default Homepage;
