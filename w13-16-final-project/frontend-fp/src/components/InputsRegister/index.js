import React, { useState } from "react";
import "./styles.css";
import { API_URL } from "../../config";

function InputsRegister({ setShowModalRegister }) {
  const [name1, setName1] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [password2, setPassword2] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  function handleName(event) {
    const name1 = event.target.value;
    setName1(name1);
  }
  function handleSurname(event) {
    const surname = event.target.value;
    setSurname(surname);
  }
  function handleUsername(event) {
    const username = event.target.value;
    setUsername(username);
  }
  function handleEmail(event) {
    const email = event.target.value;
    setEmail(email);
  }
  function handleAge(event) {
    const age = event.target.value;
    setAge(age);
  }

  function handlePassword(event) {
    const password = event.target.value;
    setPassword(password);
  }

  function handleHobbies(event) {
    const hobbies = event.target.value;
    setHobbies(hobbies);
  }

  function onSubmit(name1, surname, username, email, password, age, hobbies) {
    const templateRegister = {
      name: name1,
      surname: surname,
      username: username,
      email: email,
      password: password,
      age: age,
      hobbies: hobbies,
    };

    fetch(`${API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(templateRegister),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for for that resourse");
        }
        return res.json();
      })
      .catch((err) => {
        //auto catches network / connection error
        setIsPending(false);
        setError(err.message);
      });

    setName1("");
    setSurname("");
    setUsername("");
    setAge(null);
    setEmail("");
    setPassword("");
    setHobbies([]);
  }

  const handleForm = async () => {
    if (name1 && surname && username && email && password) {
      //fetch register here
      onSubmit(name1, surname, username, email, password, age, hobbies);
      //----------------------//
      console.log("Registered for new user");
      setShowModalRegister(false);
    }
  };

  return (
    <div className="form">
      <label className="requiredLabel"> *All Fields Required</label>
      <div>First Name :</div>
      <input
        className="form-textarea form-input"
        type="text"
        onChange={handleName}
        placeholder="Enter your First Name"
        value={name1}
        maxLength="30"
      />
      <br />
      <div>Last Name :</div>
      <input
        className="form-textarea form-input"
        type="text"
        onChange={handleSurname}
        placeholder="Enter your Last Name"
        value={surname}
        maxLength="30"
      />
      <br />
      <div>Username :</div>
      <input
        className="form-textarea form-input"
        type="text"
        onChange={handleUsername}
        placeholder="Enter your username"
        value={username}
        maxLength="30"
      />

      <br />
      <div>Email :</div>
      <input
        className="form-textarea form-input"
        type="text"
        onChange={handleEmail}
        placeholder="Enter your email"
        value={email}
        maxLength="30"
      />

      <br />
      <div>Password :</div>
      <input
        className="form-textarea form-input"
        type="password"
        onChange={handlePassword}
        placeholder="Enter your password"
        value={password}
        maxLength="30"
      />

      <br />
      <div>Age :</div>
      <input
        className="form-textarea form-input"
        type="number"
        onChange={handleAge}
        placeholder="Enter your age"
        value={age}
        maxLength="3"
      />

      <br />
      <div>Hobbies :</div>
      <input
        className="form-textarea form-input"
        type="text"
        onChange={handleHobbies}
        placeholder="Enter your hobbies"
        value={hobbies}
        maxLength="80"
      />

      <br />
      <button className="form-submit-button" onClick={() => handleForm()}>
        SUBMIT
      </button>
    </div>
  );
}

export default InputsRegister;
