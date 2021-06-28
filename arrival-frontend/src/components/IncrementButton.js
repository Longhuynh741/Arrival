import React from "react";
import api from ".././pages/api/index";
import { useMutation } from 'react-query';

function IncrementButton({ props }) {
    
  
  console.log(props.eventId);
  const updateRecord = useMutation(({ payload, id }) =>
    api.update(payload, id)
  );

  const handleIncrement = () => {
    
    const updatedRecord = {
      eventName: props.eventName,
      mainHost: props.mainHost,
      location: props.location,
      moreDetails:props.moreDetails,
      checkedIn: props.checkedIn + 1
    }

    updateRecord.mutate({
      payload: updatedRecord,
      id: props.eventId
    });
    
    alert("You Checked In!");
    window.location.reload();

      };

    return (
        <div>
        <div>
          <h5>Check In to Event:</h5>
          <button onClick={handleIncrement}>Check In</button>
        </div>
      </div>
    )
  }
  
  export default IncrementButton;