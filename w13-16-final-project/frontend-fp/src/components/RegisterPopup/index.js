import React from "react";
import "./styles.css";

import InputsRegister from "../InputsRegister";

function RegisterPopup({ showModalRegister, setShowModalRegister }) {
  if (showModalRegister) {
    return (
      <div className="window-modal">
        <div className="window">
          <span className="close" onClick={() => setShowModalRegister(false)}>
            &times;
          </span>
          <h2 className="window-title">Register Here</h2>
          <InputsRegister setShowModalRegister={setShowModalRegister} />
        </div>
      </div>
    );
  }
  return null;
}

export default RegisterPopup;
