import React, { useReducer } from "react";

let id = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))._id
  : "";

let name = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).name
  : "";

let surname = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).surname
  : "";

let username = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).username
  : "";
let age = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).age
  : "";

let email = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).email
  : "";

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

export const initialState = {
  id: "" || id,
  name: "" || name,
  surname: "" || surname,
  username: "" || username,
  age: null || age,
  email: "" || email,
  token: "" || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...initialState,
        loading: true,
      };

       case "REGISTER_SUCCESS":
      return {
        ...initialState,
        id: action.payload._id,
        name: action.payload.name,
        surname: action.payload.surname,
        username: action.payload.username,
        age: action.payload.age,
        email: action.payload.email,
        // user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
      };


   
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        id: action.payload._id,
        name: action.payload.name,
        surname: action.payload.surname,
        username: action.payload.username,
        email: action.payload.email,
        // user: action.payload.user,
        token: action.payload.token,
        loading: false,
      };
    
    case "LOGOUT":
      return {
        ...initialState,
        id: "",
        name: "",
        surname: "",
        username: "",
        age: null,
        email: "",
        token: "",
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    case "REGISTER_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
