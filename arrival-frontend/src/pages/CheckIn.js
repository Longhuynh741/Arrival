import Button from 'react-bootstrap/Button';
import Questions from './Questions';
import { Container } from 'react-bootstrap';
import api from "./api/index";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useHistory } from "react-router-dom";




const fetchRecords = async () => await api.index();

function CheckIn() {

    const { data } = useQuery('events', fetchRecords);
    console.log(data);
    let  newArray = [];
    const queryClient = useQueryClient();
    const addRecord = useMutation(payload => api.create(payload));
    let history = useHistory(); 
    if (!data) {
      return null
    }
    else {
      newArray = data;
    }

    return (
        <div>
            <div>
                <Container>
                    <Questions records = {newArray} />
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