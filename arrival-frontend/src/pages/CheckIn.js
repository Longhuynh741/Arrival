import Button from 'react-bootstrap/Button';
import Questions from './Questions';
import { Container } from 'react-bootstrap';

function CheckIn() {
    return (
        <div>
            <div>
                <Container>
                    <Questions />
                </Container>
            </div>
            <div>
                <Button class="btn btn-primary mr-1">Check in</Button>
                <Button class="btn btn-primary">Submit Answer</Button>
            </div>
            </div>
            );
}
            export default CheckIn;