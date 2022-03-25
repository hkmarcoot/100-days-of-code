import React, { useState } from "react";
import "./styles.css";
import { loginUser, useAuthState, useAuthDispatch } from "../Context/index.js";

function InputsLogin({ setShowModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  function handleEmail(event) {
    const email = event.target.value;
    setEmail(email);
  }

  function handlePassword(event) {
    const password = event.target.value;
    setPassword(password);
  }

  const handleForm = async () => {
    if (email && password) {
      await loginUser(dispatch, { email: email, password: password });

      // try {
      //   let response = await loginUser(dispatch, { email, password });
      //   if (!response) return;
      //   props.history.push("/main"); //navigate to main page on success
      // } catch (error) {
      //   console.log(error);
      // }
      console.log("Login email and password submited");
      setShowModal(false);
    }
  };

  return (
    <div className="form">
      <label className="requiredLabel"> * All Fields Required</label>
      <div>Email :</div>
      <input
        className="form-textarea form-input"
        type="text"
        onChange={handleEmail}
        placeholder="Enter your email"
        value={email}
        maxLength="50"
      />

      <br />
      <div>Password :</div>
      <input
        className="form-textarea form-input"
        type="password"
        onChange={handlePassword}
        placeholder="Enter your password"
        value={password}
        maxLength="80"
      />

      <br />
      <button className="form-submit-button" onClick={() => handleForm()}>
        SUBMIT
      </button>
    </div>
  );
}

export default InputsLogin;
