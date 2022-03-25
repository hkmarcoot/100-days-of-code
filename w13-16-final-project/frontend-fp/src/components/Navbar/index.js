import React from "react";

import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import styles from "../Navbar/navbar.module.css";
import { useAuthDispatch, logout, useAuthState } from "../Context/index.js";
import LoginButton from "../LoginButton";
import RegisterButton from "../RegisterButton";
import { Link } from "react-router-dom";

function Navbar({ setShowModal, setShowModalRegister, pageName }) {
  const dispatch = useAuthDispatch(); // read dispatch method from context
  const userDetails = useAuthState(); //read user details from context

  // console.log(userDetails);
  const handleLogout = () => {
    logout(dispatch); //call the logout action
    window.location.replace("/"); //Go to landing page after signout
    // props.history.push("/"); //navigate to landing page on logout
  };

  const handleGoToDashboard = () => {
    window.location.replace("/dashboard"); // Go to dashboard page
  };

  return (
    <div className={styles.navContainer}>
      <Link to="/">
        <img
          src="./logo2.png"
          className={styles.navLogo}
          width="200px"
          height="70px"
          alt="experience logo"
        />
      </Link>
      <nav className={styles.navlink}>
        <ul>
          <li>
            <div
              className={styles.navAbout}
              onClick={() => window.location.replace("/#about-us-section")}
            >
              About
            </div>
          </li>
          {userDetails.username ? (
            <>
              <li>
                <div className={styles.navSignout} onClick={handleLogout}>
                  <FaSignOutAlt />
                  Signout
                </div>
              </li>
              <li>
                <div
                  className={styles.navUsername}
                  onClick={handleGoToDashboard}
                >
                  {"Username: "}
                  {userDetails ? userDetails.username : ""}
                </div>
              </li>
            </>
          ) : (
            <>
              <li>
                <LoginButton handleFormPage={() => setShowModal(true)} />
              </li>
              <li>
                <RegisterButton
                  handleFormPage={() => setShowModalRegister(true)}
                />
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
