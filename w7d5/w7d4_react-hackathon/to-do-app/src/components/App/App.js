import React, {useState} from "react";
import "./App.css";
import Input from "../Input/index.js";
import ListItems from "../Item/index.js";
import List from "../List/index.js";
import sampleListItems from "../../libs/data"

function App() {
  const [text, setText] = useState("empty");
  const [items, setItems] = useState(sampleListItems);

  function addItem(item){
    setItems([...items, item]);
  }

  function handleChange() {
    setText(document.querySelector('input').value)
    
  }

  console.log(text);

  return (
    
    <div className="App">
      <h1>JSX will go here!</h1>
      <Input />
      <button onClick={ () => handleChange()} >Input to the list</button> 

    
      {/* <ListItems text={text} font="Courier" />  */}
      <List text={text} items={items} addItem={addItem}/>
      

    </div>
    
    
  );
}

export default App;
