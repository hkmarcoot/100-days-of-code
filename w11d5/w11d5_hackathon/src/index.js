import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.render(

   <Auth0Provider
    domain="dev-o2eni91o.us.auth0.com"
    clientId="caRyElir5GwnC7gkSchbGdx4kv4MGh7z"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,

  document.getElementById("root")
);
