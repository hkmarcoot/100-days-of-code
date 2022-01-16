import React from "react";
import "./App.css";
import {useState} from "react";
import {bootcampers, compliments} from "./bootcampers";


function App() {

  // function handleClick(){Math.floor(Math.random) * bootcampers.length}

  function handleClick(){ setBootcamperIndex( Math.floor(Math.random()*bootcampers.length)); 
                          setComplimentIndex( Math.floor(Math.random()*compliments.length));}  
  
  const [bootcamperIndex, setBootcamperIndex] = useState(0);
  const [complimentIndex, setComplimentIndex] = useState(0);

  return (
    <div className="App">
      <h1>React useState</h1>
      <p>{bootcampers[bootcamperIndex]}</p>
      <p>{compliments[complimentIndex]}</p>
      <button onClick={handleClick}>Click me for a random bootcamper!</button>
    </div>
  );
}

export default App;
