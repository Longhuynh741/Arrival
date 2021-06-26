import React, { useState } from "react";

function DecrementButton(props) {
    
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        setCount(prevCount => prevCount +1);
      };

    return (
        <div>
        <div>
          <h5>Count is {count}</h5>
          <button onClick={handleDecrement}>No</button>
        </div>
      </div>
    )
  }
  
  export default DecrementButton;