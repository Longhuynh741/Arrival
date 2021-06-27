import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Logo from "../assets/ArrivalLogo.png";
require("../assets/css/Homepage.css");

function Homepage() {
  const [searchObject, setSearchObject] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchObject({ ...searchObject, [name]: value });
  }

  const searchTerm = searchObject.companyName;
  console.log(searchTerm);

  let history = useHistory();

  function handleSearch() {

    if (searchTerm !== "Cognizant") {
      history.push("/Error");
    } else {
      history.push("/Event/" + searchTerm);
    }
  }

  return (
    <div className="jumbotron hero">
      <h1 id="heroText"> Welcome To Arrival </h1>
      <img src={Logo} alt="logo" id="logo" />
      <Container className="searchContainer">
        <h2> Search For Your Company</h2>

        <Form variant="outline-success" onSubmit={() => handleSearch()}>
          <div className="registerInput">
            <input
              name="companyName"
              onChange={handleInputChange}
              type="text"
              placeholder="Company Name"
            />
            <button type="submit" id="inputText">
              Search
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Homepage;
