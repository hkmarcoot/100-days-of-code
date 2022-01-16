import React from "react";
import ListItem from "../List Item";

function ListContainer({ data, deleteBook }) {
  return (
    <ul id="ListContainer">
      {data.map((book, index) => (
        <ListItem key={index} index={index} book={book} deleteBook={deleteBook} />
      ))}
    </ul>
  );
}

export default ListContainer;
