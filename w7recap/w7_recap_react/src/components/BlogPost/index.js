import React from 'react';

import './index.css';

function BlogPost(props) {
  return <article id="post">
    <h1>{props.title}</h1>
    <p></p>
    <h2>by {props.author}</h2>
    <p></p>
    <h3>{props.date}</h3>
    <br></br>
    
    <img src={props.image} alt ={props.alt} width="300px"/>

    <p>{props.alt}</p>

    <p>{props.text}</p>


  </article>;
}

export default BlogPost;