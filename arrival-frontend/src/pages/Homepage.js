import React, {useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";

// require("./Homepage.css");

function Homepage() {
  const [searchObject, setSearchObject] = useState({});
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchObject({ ...searchObject, [name]: value });
  }

  const searchTerm = searchObject.companyName;
  console.log(searchTerm)

  let history = useHistory();

  function handleSearch() {

    if (searchTerm !== "Cognizant") {
      history.push("/Error")
    }

    else {
      history.push("/Event/" + searchTerm);
    }
  }

  return (
    <div className="jumbotron hero">
      <h1> Welcome To Arrival </h1>
      <h2> Search For Your Company</h2>
        <Form variant="outline-success" onSubmit={() => handleSearch()}>
        <div className="registerInput">
            <input
              name="companyName"
              onChange={handleInputChange}
              type="text"
              placeholder="Company Name"
          />
          <button type="submit"> Search </button>
          </div>
        </Form>
    </div>
  );
}

export default Homepage;
