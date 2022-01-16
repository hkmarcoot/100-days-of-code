import React from "react";

import beetroot from "../../images/beetroot.svg";
import eye from "../../images/visible.svg";
import mouth from "../../images/mouth.svg";

import css from "./BeetrootImage.module.css";

function BeetrootImage() {
  return (
    <div className={css.beetrootContainer}>
      <img src={beetroot} alt="beetroot" className={css.beetroot} />
      <img
        src={eye}
        alt="eye"
        className={css.eye}
        style={{ "--position": "-100%" }}
      />
      <img
        src={eye}
        alt="eye"
        className={css.eye}
        style={{ "--position": "0%" }}
      />
      <img src={mouth} alt="mouth" className={css.mouth} />
    </div>
  );
}
export default BeetrootImage;
