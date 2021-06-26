import React, { useState } from "react";

function IncrementButton(props) {
    
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
      };

    return (
        <div>
        <div>
          <h5>Count is {count}</h5>
          <button onClick={handleIncrement}>Yes</button>
        </div>
      </div>
    )
  }
  
  export default IncrementButton;