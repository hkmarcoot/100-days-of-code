import React, {useState} from "react";
import sampleListItems from "../../libs/data"
import ListItems from "../Item/index.js";

// function List (props){
//     const [items, setItems] = useState(sampleListItems);
   
//     const newItemsList = [...items, {id: items.length, text: props.text}];
//     console.log(newItemsList);

//     return <ul>
//         {newItemsList.map(function(item){return <ListItems key={item.id} text={item.text} font="Courier" />})}
//     </ul>;
// }


// function List (props){
    
//     const [items, setItems] = useState(sampleListItems);
   
//     let newItemsList = [...items]

//     newItemsList = [...newItemsList, {id: items.length, text: props.text}];
//     setItems(newItemsList);
    
//     console.log(newItemsList);

//     return <ul>
//         {newItemsList.map(function(item){return <ListItems key={item.id} text={item.text} font="Courier" />})}
//     </ul>;
// }


const List = React.memo(props => {
    // const [items, setItems] = useState(sampleListItems);
   
    // let newItemsList = [...items];

    
    // newItemsList.push({id: items.length, text: props.text});
    // setItems(newItemsList);
    
  
    // console.log(newItemsList);

    return <ul>
        {props.items.map(function(item){return <ListItems key={item.id} text={item.text} addItem={addItem} font="Courier" />})}
    </ul>;
});

export default List;
   