import React, {useState} from "react";
import sampleListItems from "../../libs/data"


function ListItems (props){
 return <div>
     <li>{props.text}</li>
 </div>
}


export default ListItems;

