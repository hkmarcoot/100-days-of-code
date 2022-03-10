import React from "react";

import css from "./PigeonItem.module.css";

function PigeonItem({ id, name, longitude, latitude, img_url }) {
  return (
    <li className={css.container}>
      <div>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <p>longitude: {longitude}</p>
        <p>latitude: {latitude}</p>
      </div>
      <img src={img_url} alt={`a pigeon called ${name}`}></img>
    </li>
  );
}

export default PigeonItem;
