import React from "react";

import css from "./SpeechBubble.module.css";

function SpeechBubble({ children, direction, className }) {
  return (
    <p className={css.speechBubble + " " + className + " " + css[direction]}>
      {children}
    </p>
  );
}

export default SpeechBubble;
