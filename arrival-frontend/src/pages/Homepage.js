import React from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

require("./Homepage.css");

function Homepage() {
  let history = useHistory();

  function handleSearch() {
    history.push("/Event");
  }

  // function handleLogin() {
  //   history.push("/Login");
  // }

  return (
    <div className="jumbotron hero">
      <h1> Welcome To Arrival </h1>
      <h2> Search For Your Company</h2>
      <Form inline>
        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success" onClick={() => handleSearch()}>
          Search
        </Button>
      </Form>
    </div>
  );
}

export default Homepage;
