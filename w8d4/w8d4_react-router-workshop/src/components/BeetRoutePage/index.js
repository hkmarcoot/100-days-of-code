import React from "react";

import SpeechBubble from "../SpeechBubble";
import BeetrootImage from "../BeetrootImage";

import css from "./BeatRoutePage.module.css";

function BeetRoutePage() {
  return (
    <main className={css.main}>
      <h1 className={css.heading}>BEETROUTE</h1>
      <div className={css.container}>
        <BeetrootImage />
        <section>
          <SpeechBubble direction="bl">THERE'S A BETTER WAY!</SpeechBubble>
        </section>
      </div>
    </main>
  );
}

export default BeetRoutePage;
