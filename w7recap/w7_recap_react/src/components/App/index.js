import React, { useState } from 'react';

import "./index.css";

import sampleComments from '../../libs/dataComment.js';
// import Header from "../Header";
import Main from "../Main";
import CommentsSection from "../CommentsSection";
// import CommentList from "../CommentList"
// import CommentForm from "../CommentForm"
// import Footer from "../Footer";

function App() {
  const [comments, setComments] = useState(sampleComments);
  function addItem(item) {
    // Don't add the item if it is empty
    if (item.text === "") {
      console.log("It is empty");
      return;
    }
    setComments([...comments, item]);
    
  }
  
  console.log(comments);

  return (
    <div id="app">
      {/* <Header /> */}
      <Main />
      <CommentsSection items={comments} onSubmitClick={addItem} />
      {/* <CommentList items={comments} />
      <CommentForm items={comments} onSubmitClick={addItem} /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
