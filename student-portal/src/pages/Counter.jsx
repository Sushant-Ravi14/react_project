import React, { useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

return (
  <div className="text-center">
    <div className="counter-box">
      <h2 style={{ marginBottom: "8px", fontWeight: "500", color: "var(--text-muted)" }}>Interactive Counter</h2>
      <div className="counter-value">{value}</div>

      <div className="counter-buttons">
        <button className="secondary" onClick={() => setValue(value + 1)}>Increment</button>
        <button className="secondary" onClick={() => value > 0 && setValue(value - 1)}>
          Decrement
        </button>
        <button className="primary" onClick={() => setValue(0)}>Reset</button>
      </div>
    </div>
  </div>
);
}

export default Counter;