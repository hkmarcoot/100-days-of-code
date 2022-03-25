import { FaUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  registerUser,
  useAuthState,
  useAuthDispatch,
} from "../Context/index.js";

//Not using this now, use InputsRegister instead

function Register(props) {
  //{ onSubmitLogin, setShowModal }
  // const [name, setName] = useState("");
  // const [surname, setSurname] = useState("");
  // const [username, setUsername] = useState("");
  // const [age, setAge] = useState(null);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [password2, setPassword2] = useState("");
  // const [hobbies, setHobbies] = useState([]);
  // const [formData, setFormData] = useState({
  //   name: '',
  //   surname: '',
  //   username: '',
  //   age: null,
  //   email: '',
  //   password: '',
  //   password2: '',
  //   hobbies: [],
  // })
  // const { name, surname, username, email, age, password, password2, hobbies } = formData
  // const dispatch = useAuthDispatch();
  // const { loading, errorMessage } = useAuthState();
  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }))
  // }
  // // function handleName(event) {
  // //   const name = event.target.value;
  // //   setName(name);
  // // }
  // // function handleSurname(event) {
  // //   const surname = event.target.value;
  // //   setSurname(surname);
  // // }
  // // function handleUsername(event) {
  // //   const username = event.target.value;
  // //   setUsername(username);
  // // }
  // // function handleEmail(event) {
  // //   const email = event.target.value;
  // //   setEmail(email);
  // // }
  // // function handleAge(event) {
  // //   const age = event.target.value;
  // //   setAge(age);
  // // }
  // // function handlePassword(event) {
  // //   const password = event.target.value;
  // //   setPassword(password);
  // // }
  // const handleForm = async () => {
  //   if (email && password) {
  //     await registerUser(dispatch, {name: name, surname: surname, username: username, age: age, email: email, password: password, password2: password2,hobbies: hobbies });
  //     try {
  //       let response = await Register(dispatch, {name, surname, username, age, email, password, password2, hobbies });
  //       if (!response) return;
  //       props.history.push("/"); //navigate to main page on success
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     console.log("Login email and password submited");
  //     props.setShowModal(false);
  //   }
  // };
  // return (
  //   <div className="form">
  //     <label className="requiredLabel"> * Required</label>
  //     <textarea
  //       className="form-textarea form-input"
  //       type="text"
  //       onChange={onChange}
  //       placeholder="Enter your name"
  //       value={name}
  //       maxLength="50"
  //     />
  //     <label className="requiredLabel"> * Required</label>
  //     <textarea
  //       className="form-textarea form-input"
  //       type="text"
  //       onChange={onChange}
  //       placeholder="Enter your surname"
  //       value={surname}
  //       maxLength="50"
  //     />
  //     <label className="requiredLabel"> * Required</label>
  //     <textarea
  //       className="form-textarea form-input"
  //       type="text"
  //       onChange={onChange}
  //       placeholder="Enter your username"
  //       value={username}
  //       maxLength="50"
  //     />
  //     <label className="requiredLabel"> * Required</label>
  //     <textarea
  //       className="form-textarea form-input"
  //       type="number"
  //       onChange={onChange}
  //       placeholder="Enter your email"
  //       value={age}
  //       maxLength="50"
  //     />
  //     <label className="requiredLabel"> * Required</label>
  //     <textarea
  //       className="form-textarea form-input"
  //       type="text"
  //       onChange={onChange}
  //       placeholder="Enter your email"
  //       value={email}
  //       maxLength="50"
  //     />
  //     <label className="requiredLabel"> * Required</label>
  //     <textarea
  //       className="form-textarea form-input"
  //       type="password"
  //       onChange={onChange}
  //       placeholder="Enter your password"
  //       value={password}
  //       maxLength="80"
  //     />
  //     <label className="requiredLabel"> * Required</label>
  //     <textarea
  //       className="form-textarea form-input"
  //       type="password"
  //       onChange={onChange}
  //       placeholder="Confirm your password"
  //       value={password2}
  //       maxLength="80"
  //     />
  //     <label className="requiredLabel"> * Required</label>
  //     <textarea
  //       className="form-textarea form-input"
  //       type="text"
  //       onChange={onChange}
  //       placeholder="Enter your hobbies"
  //       value={hobbies}
  //       maxLength="80"
  //     />
  //     <br />
  //     <button className="form-submit-button" onClick={() => handleForm()}>
  //     Submit
  //     </button>
  //   </div>
  // );
}

export default Register;
