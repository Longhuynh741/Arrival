import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const EventResults = (props) => {
  return (
    <div>
      <Container className="eventDetails justify-content-md-center">
        <h1> Event Details Here: </h1>
        <p>
        
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.{" "}
        </p>
      </Container>

      <Container className="resultsContainer">
    
        <h1> Results Goes Here: </h1>
        <Row>
          <Col md="3">
            <Card style={({ width: "18rem" }, { margin: "15px" })}>
              <Card.Body>
                <Card.Title>Question 1 Results</Card.Title>
                <Card.Text>
                  Results Here:
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md="3">
            <Card style={({ width: "18rem" }, { margin: "15px" })}>
              <Card.Body>
              <Card.Title>Question 2 Results</Card.Title>
                <Card.Text>
                  Results Here:
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card style={({ width: "18rem" }, { margin: "15px" })}>
              <Card.Body>
              <Card.Title>Question 3 Results</Card.Title>
                <Card.Text>
                  Results Here:
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card style={({ width: "18rem" }, { margin: "15px" })}>
              <Card.Body>
              <Card.Title>Question 4 Results</Card.Title>
                <Card.Text>
                  Results Here:
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EventResults;
