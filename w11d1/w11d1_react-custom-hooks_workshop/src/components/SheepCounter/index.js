import { useState } from "react";
import { useCounter } from "../../hooks/useCounter";

import sheep from "./sheep.svg";

function SheepCounter() {
  const quantity = useCounter(0);

  return (
    <div>
      <h4>Sheep Counter</h4>
      <button onClick={quantity.decrement}>Less</button>
      <button onClick={quantity.increment}>More</button>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {Array(quantity.value)
          .fill()
          .map((_, i) => {
            return (
              <img
                src={sheep}
                key={i}
                alt={`sheep number ${i + 1}`}
                style={{ width: "50px" }}
              />
            );
          })}
      </div>
    </div>
  );
}

export default SheepCounter;
