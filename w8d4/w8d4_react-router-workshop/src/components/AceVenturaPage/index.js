import React from "react";
import SpeechBubble from "../SpeechBubble";
import css from "./AceVenturaPage.module.css";
import ace from "../../images/ace.png";

function AceVenturaPage() {
  return (
    <main className={css.main} style={{ backgroundImage: `url(${ace})` }}>
      <h1 className={css.heading}>Ace Ventura</h1>
      <SpeechBubble className={css.speech} direction="tr">
        ALL ROUTEY THEN...
      </SpeechBubble>
    </main>
  );
}

export default AceVenturaPage;
