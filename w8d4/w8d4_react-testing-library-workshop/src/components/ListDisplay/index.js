/* This component will show the list of items that the person has entered.*/

import React from "react";
import ListItem from "../ListItem";

function ListDisplay({ list, tickItem }) {
  return (
    <ol data-testid="list-display">
      {list.map((listItem) => (
        <ListItem
          data-testid="list-item"
          name={listItem.name}
          completed={listItem.completed}
          key={listItem.id}
          tickItem={() => tickItem(listItem.id)}
        />
      ))}
    </ol>
  );
}

export default ListDisplay;
