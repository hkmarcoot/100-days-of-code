import React, {useState} from "react";
import "./App.css";
import Input from "../Input/index.js"
import ListItems from "../Item/index.js"

function App() {
  const [text, setText] = useState("empty");

  function handleChange() {
    setText(document.querySelector('input').value)
    
  }

  console.log(text);

  return (
    
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input onChange={handleChange} />
      {/* <button onClick={ () => handleChange()} >Input to the list</button> */}
      <ListItems text={text} font="Courier"/>
      <ListItems text={text} font="Impact"/>
      <ListItems text={text} font="Arial"/>
      <ListItems text={text} font="Times New Roman"/>
      <ListItems text={text} font="Palatino"/>
      
    </div>
    
    
  );
}

export default App;
