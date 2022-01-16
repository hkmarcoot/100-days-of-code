import React from 'react';

import './index.css';

function Comment(props) {
  return <div id="comment">
    
    <h2>{props.author}</h2>
    <p></p>
    <p>{props.text}</p>


  </div>;
}

export default Comment;