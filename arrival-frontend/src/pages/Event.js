import api from "./api/index";
import {useQuery} from 'react-query';
import EventsTable from "../components/EventsTable";


const fetchRecords = async () => await api.index();

const Event = (props) => {

  const { data } = useQuery('events', fetchRecords);

  console.log(data);

  let  newArray = [];

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