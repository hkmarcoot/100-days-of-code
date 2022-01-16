import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    const updatedCount = count + 1;
    setCount(updatedCount);
  }

  function decrementCount() {
    const updatedCount = count - 1;
    setCount(updatedCount);
  }

  return (
    <div>
      <button onClick={incrementCount}>+</button>
      <p>{count}</p>
      <button onClick={decrementCount}>-</button>
    </div>
  );
}

export default Counter;
