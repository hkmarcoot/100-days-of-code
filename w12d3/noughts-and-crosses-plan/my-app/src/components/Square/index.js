import React from "react";

function Square({ value, onClick }) {
  return (
    <div>
      <button className="btn" onClick={onClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;
