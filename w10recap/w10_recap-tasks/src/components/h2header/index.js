import React from "react";
import css from "./h2header.module.css";

function H2header({ title }) {
  return <h2 className={css.h2Header}>{title}</h2>;
}

export default H2header;
