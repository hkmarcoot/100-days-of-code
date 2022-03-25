import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./hero.module.css";
import { Button } from "react-bootstrap";
import Navbar from "../Navbar";
import {Link} from "react-router-dom";
//import { Link } from "react-router-dom";

function Hero({ setShowModal, setShowModalRegister }) {
  return (
    <>
      <div className={styles.heroWrapper}>
        <Navbar
          setShowModal={setShowModal}
          setShowModalRegister={setShowModalRegister}
        />
        <div class={styles.landingContainer}>
          <div className={styles.landingContainerContent}>
            <h1 className={styles.line}>
              Creating <span style={{ color: "#7201a5" }}>connections</span>
            </h1>
            <h1 className={styles.line}> through shared </h1>
            <h1 className={styles.line2}>experiences</h1>
          </div>
          <div className={styles.linkToMain}>
            <Link to="/main">
              <Button className={styles.submitButton}>GET STARTED</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
