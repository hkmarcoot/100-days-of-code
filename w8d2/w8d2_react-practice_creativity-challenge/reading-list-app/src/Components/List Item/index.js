import React from "react";

function ListItem({ book, index, deleteBook }) {
  return (
    <li className="ListItem">
      <h3>{book.title}</h3>
      <h4>{book.author_name[0]}</h4>
      <img src={`https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`} alt="" />
      <button onClick={() => deleteBook(index)}>X</button>
    </li>
  );
}

export default ListItem;
