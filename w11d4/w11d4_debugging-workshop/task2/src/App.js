import React from "react";

function App() {
  let count = 0;

  function handleClick() {
    count += 1;
  }

  return (
    <React.Fragment>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </React.Fragment>
  );
}

export default App;
