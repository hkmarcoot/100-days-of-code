import React from "react";
import { FaSignInAlt } from "react-icons/fa";
import "./styles.css";

function LoginButton({ handleFormPage }) {
  return (
    <div className="login-button-div">
      <div className="login-button" onClick={handleFormPage}>
        <FaSignInAlt /> Login
      </div>
    </div>
  );
}

export default LoginButton;
