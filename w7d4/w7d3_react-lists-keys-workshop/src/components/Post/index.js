import React from 'react';

import './index.css';

function Post(props) {
  return <article id="post">
    <h1>{props.title}</h1>
    <br></br>
    <h2>{props.author}</h2>
    <br></br>
    <h3>{props.date}</h3>
    <br></br>
    <p>{props.text}</p>
    
    {props.highlights.map(function(item){
      return <li>{item}</li>;
    })}

    <img src={props.image.link} alt ={props.image.alt} width="300px"/>


  </article>;
}

export default Post;
