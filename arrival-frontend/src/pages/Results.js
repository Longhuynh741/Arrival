import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import IncrementButton from "../components/IncrementButton";
import DecrementButton from "../components/DecrementButton";
import Questions from "./Questions";

const EventResults = (props) => {
  return (
    <div>
      <Container className="eventDetails justify-content-md-center">
        <h1> Event Details Here: </h1>

      </Container>

      <Container className="resultsContainer">

        <h1> Results Goes Here: </h1>

        <Questions/>
        <Row>
          <Col md="3">
            <Card style={({ width: "18rem" }, { margin: "15px" })}>
              <Card.Body>
                <Card.Title>Question 1 Results</Card.Title>
                <Card.Text>
                  <IncrementButton />
                  <DecrementButton />
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
