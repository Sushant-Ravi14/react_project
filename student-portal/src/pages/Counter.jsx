import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

return (
  <>
    <div style={{ textAlign: "center", padding: "0" , margin: "0"}}>
        <h2>Counter</h2>
    </div>

  <div className="counter-box">
    <h2>
      {value}
    </h2>

    <div className="counter-buttons">
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <button onClick={() => value > 0 && setValue(value - 1)}>
        Decrement
      </button>
      <button onClick={() => setValue(0)}>Reset</button>
    </div>
  </div>
  </>
);
}

export default Counter;