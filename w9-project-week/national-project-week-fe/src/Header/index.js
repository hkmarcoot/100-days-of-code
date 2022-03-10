import React from "react";
import "./styles.css";
import logo from "../logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} className="logo" alt="School of Code Logo" />
      <div className="header-titles">
        <h1 className="title">[ link worthy ]</h1>
        <h3 className="sub-title">
          a home for all your school of code bookmarks
        </h3>
        <Link to="/content" className="get-started-btn">
          GET STARTED
        </Link>
      </div>
    </div>
  );
}

export default Header;
