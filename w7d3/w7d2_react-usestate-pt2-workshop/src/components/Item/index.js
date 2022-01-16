import React from "react";

function ListItems (props){
 return <li style={{fontFamily:`${props.font}`}}>{props.text}</li>
}

export default ListItems;