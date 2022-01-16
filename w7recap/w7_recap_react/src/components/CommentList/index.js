import React, { useState } from 'react';

import './index.css';


import Comment from '../Comment/index.js';

function CommentList({items}) {
  
  return <div id="comments">
  
    {items.map(function(item) { return <Comment key = {item.id}                                           
                                            author = {item.author}
                                            text = {item.text}
                                            
                                            />})}
  </div>;

}

export default CommentList;