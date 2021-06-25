import { useHistory } from "react-router-dom";
import api from "./api/index";
import { useMutation, useQuery, useQueryClient } from 'react-query';
import EventsTable from "../components/EventsTable";


const fetchRecords = async () => await api.index();

const Event = (props) => {

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
      <EventsTable records={newArray}/>
    </div>
  );
};

export default Event;