import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";

const Event = (props) => {
  let history = useHistory();

  function handleMoreDetails() {
    history.push("/Results");

  }

  function handleDelete() {
    console.log("I will delete event")
  }

  function handleAddEvent() {
    history.push("/CreateEvent");
  }

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <h1>Coming Up Events</h1>
        </Row>
        <Jumbotron>
          <Row className="justify-content-center">
           
            <Col md="auto">
              <Table responsive="sm, md, lg">
                <thead>
                  <tr>
                    <th>#</th>
                    <th colSpan="2">Event</th>
                    <th colSpan="2">Main Host</th>
                    <th colSpan="1">Location</th>
                    <th colSpan="2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td colSpan="2">Mark</td>
                    <td colSpan="2">Otto</td>
                    <td colSpan="2">@mdo</td>
                    <td colSpan="2" onClick={() => handleMoreDetails()}>More Details</td>
                    <td colSpan="2"onClick= {() => handleDelete()}>Delete</td>

                  </tr>
                  <tr>
                    <td>2</td>
                    <td colSpan="2">Jacob</td>
                    <td colSpan="2">Thornton</td>
                    <td colSpan="2">@fat</td>
                    <td colSpan="2" onClick={() => handleMoreDetails()}>More Details</td>
                    <td colSpan="2"onClick= {() => handleDelete()}>Delete</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td colSpan="2">Larry</td>
                    <td colSpan="2">The Bird</td>
                    <td colSpan="2">@twitter</td>
                    <td colSpan="2" onClick={() => handleMoreDetails()}>More Details</td>
                    <td colSpan="2"onClick= {() => handleDelete()}>Delete</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          
          </Row>
        </Jumbotron>

        <Row className="justify-content-md-center">
          <Col>
            <h4 onClick={() => handleAddEvent()}>Add Event</h4>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col>
            <Button variant="add">Info</Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Event;