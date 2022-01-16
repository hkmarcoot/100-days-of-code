import "./App.css";

import Input from "../Input";
import ListContainer from "../List Container";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  function addBook(book) {
    setBooks([...books, book]);
  }

  function deleteBook(index) {
    setBooks([...books.slice(0, index), ...books.slice(index + 1)]);
  }

  return (
    <div className="App">
      <Input addBook={addBook} />
      <ListContainer data={books} deleteBook={deleteBook} />
    </div>
  );
}

export default App;
