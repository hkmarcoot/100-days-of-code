import React from "react";
import fruit from "../../images/fruit.svg";
import css from "./HomePage.module.css";

function HomePage() {
  return (
    <main className={css.main}>
      <h1 className={css.heading}>HOME</h1>
      <section className={css.section}>
        <div>
          <h1>Route Veg </h1>
          <ul>
            <li>Caroute</li>
            <li>Beetroute</li>
            <li>Jeroutesalem Artichoke</li>
            <li>Brussel Sproutes</li>
            <li>Routebarb</li>
          </ul>
        </div>
        <img src={fruit} alt="fruit" />
      </section>
    </main>
  );
}

export default HomePage;
