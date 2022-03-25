import React from "react";
import { FaUser } from "react-icons/fa";
import "./styles.css";

function RegisterButton({ handleFormPage }) {
  return (
    <div className="register-button-div">
      <div className="register-button" onClick={handleFormPage}>
        <FaUser /> Register
      </div>
    </div>
  );
}

export default RegisterButton;
