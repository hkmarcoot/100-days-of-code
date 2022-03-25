import React from "react";
import "./styles.css";

import InputsLogin from "../InputsLogin";
import { Link } from "react-router-dom";

function LoginPopup({ showModal, setShowModal, setShowModalRegister }) {
  if (showModal) {
    return (
      <div className="window-modal">
        <div className="window">
          <span className="close" onClick={() => setShowModal(false)}>
            &times;
          </span>
          <h2 className="window-title">Login Here</h2>
          <InputsLogin setShowModal={setShowModal} />
          <p> Don't have account, signup here</p>
          <button
            onClick={() => {
              setShowModal(false);
              setShowModalRegister(true);
            }}
          >
            Register
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default LoginPopup;
