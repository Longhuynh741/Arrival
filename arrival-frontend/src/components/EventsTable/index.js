import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useHistory } from "react-router-dom";
import api from "../../pages/api";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdAddCircle } from "react-icons/md";
import Card from "react-bootstrap/Card";
import IncrementButton from "../IncrementButton";
import React, { useState } from "react";

require("../../assets/css/Event.css");

function EventsTable({ records }) {
  let history = useHistory();


  let [detailsArray, setDetailsArray] = useState([]);


   function HandleMoreDetails(eventId) {

    
    let eventInput = Object.values(eventId);

     api.getById(eventInput).then((response) => {
      
       if (detailsArray.length = 0) {
         console.log("null data")
       }

       else {
         let updatedResponse = (response);
         console.log(updatedResponse)
         setDetailsArray( response )
        document.getElementById("Test").classList.remove("hide");
       }
       
    });

   }
  
  console.log(detailsArray);
  console.log(records);

  function handleDelete(eventId) {
    api.delete(eventId);
    window.location.reload();
  }
  function handleAddEvent() {
    history.push("/CreateEvent");
  }
  return (
    <div className="eventContainer">
      <Container>
        <Row className="justify-content-md-center">
          <h1 id="titleText">Cognizant Upcoming Events</h1>
        </Row>
        <Table striped bordered hover variant="dark" responsive="sm, md, lg">
          <thead>
            <tr>
              <th>Event Id</th>
              <th colSpan="2">Event</th>
              <th colSpan="2">Main Host</th>
              <th colSpan="2">Location</th>
              <th colSpan="2">Details</th>
              <th colSpin="2"> Delete Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td colSpan="2">Annual Earnings Meet</td>
              <td colSpan="2">Otto</td>
              <td colSpan="2">World Conference Center</td>
              <td colSpan="2" onClick={() => HandleMoreDetails()}>
                More Details
              </td>
              <td colSpan="2" onClick={() => handleDelete()}>
                <RiDeleteBin5Line />{" "}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td colSpan="2">Finance Seminar</td>
              <td colSpan="2">Thornton</td>
              <td colSpan="2">Staples Center</td>
              <td colSpan="2" onClick={() => HandleMoreDetails()}>
                More Details
              </td>
              <td colSpan="2" onClick={() => handleDelete()}>
                <RiDeleteBin5Line />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan="2">Elon Musk's TED Talk</td>
              <td colSpan="2">Elon Musk</td>
              <td colSpan="2">Tesla Headquarters</td>
              <td colSpan="2" onClick={() => HandleMoreDetails()}>
                More Details
              </td>
              <td colSpan="2" onClick={() => handleDelete()}>
                <RiDeleteBin5Line />
              </td>
            </tr>
            {records.map(
              ({ eventId, eventName, location, mainHost, moreDetails }) => (
                <tr>
                  <td key={eventId}>{eventId}</td>
                  <td colSpan="2">{eventName}</td>
                  <td colSpan="2">{mainHost}</td>
                  <td colSpan="2">{location}</td>
                  <td
                    colSpan="2"
                    onClick={() => HandleMoreDetails({ eventId })}
                  >
                    More Details
                  </td>
                  <td colSpan="2" onClick={() => handleDelete(eventId)}>
                    <RiDeleteBin5Line />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <Row className="justify-content-md-center">
          <Col>
            <h4 onClick={() => handleAddEvent()}>
              Add Event <p /> <MdAddCircle id="addIcon" />{" "}
            </h4>
          </Col>
        </Row>
        <Row className="justify-content-md-center"></Row>
      </Container>

      <div className="ResultsContainer hide" id="Test">
        <Container className="eventDetails justify-content-md-center">
          <h1> Event Details Below </h1>


            <h4 id="moreDetailsText "> {detailsArray.moreDetails}</h4>

        </Container>

        <Container className="resultsContainer">
          <h1> Results Goes Here: </h1>

              <Card style={({ mixBlendMode: "multiply"
          })}>
            <h5>Total Checked In: {detailsArray.checkedIn}</h5>

                    <IncrementButton props= {detailsArray} />
          </Card>
          
        </Container>
      </div>
    </div>
  );
}

export default EventsTable;
