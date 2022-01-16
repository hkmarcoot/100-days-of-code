import { useState } from "react";

function Input({ addBook }) {
  // Keep track of text inside input field with usestate
  const [text, setText] = useState("");

  async function getBook() {
    const response = await fetch(`http://openlibrary.org/search.json?q=${text}`);
    const data = await response.json();
    console.log(data.docs[0]);
    return data.docs[0];
  }

  // Update text state when user inputs some text
  function updateText(e) {
    setText(e.target.value);
  }

  // On submit, add input text to list
  async function handleSubmit(e) {
    e.preventDefault();
    // Send text to add book function
    const book = await getBook();
    // const img = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    e.target[0].value = "";
    addBook(book);
    // Clear input field
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={updateText} type="text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Input;
