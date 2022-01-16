import { useState } from "react";

function CommentForm({ items, onSubmitClick }) {
    //See example from 
    //https://www.codegrepper.com/code-examples/javascript/get+input+value+in+react+using+hooks
    // const [id, setId] = useState();
    const [author, setAuthor] = useState("John Wick");
    const [text, setText] = useState("");

//   function handleChange(event) {
//     setText(event.target.value);
//   }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    const comment = {
        'id' : items.length + 1,
        'author' : author,
        'text' : text
    }
    onSubmitClick(comment);

    //Clear response
    setText("");
    document.getElementById("comment-text").value="";
  }

  return (
    <form onSubmit={handleSubmit}>
        {/* <input type="number" onChange={e => setId(e.target.value)} /> */}
        <input id="comment-author" type="text" placeholder="John Wick" onChange={e => setAuthor(e.target.value)} />
        <input id="comment-text" type="text" placeholder="Write a response..." onChange={e => setText(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}

export default CommentForm;