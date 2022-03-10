import React from "react";

import PigeonItem from "../PigeonItem";
import css from "./App.module.css";

import { dummyData } from "./data";

function App() {
  return (
    <div className={css.App}>
      <header className={css.container}>
        <h1>Pigeon Dashboard</h1>
        <p>Track Them Pigeons!!</p>
      </header>
      <ul className={css.pigeonList}>
        {dummyData.map((data) => {
          const { id, name, longitude, latitude, img_url } = data;
          return (
            <PigeonItem
              id={id}
              name={name}
              longitude={longitude}
              latitude={latitude}
              img_url={img_url}
              key={data.name}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
