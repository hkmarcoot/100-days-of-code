import React from "react";
import styles from "./Footer.module.css";
import SOClogo from "../Footer/SOClogo.jpg"
import LinkedInLogo from "./linkedin.svg"
import TwitterLogo from "./twitter.svg"
import EmailLogo from "./mail.svg"
import FacebookLogo from "./facebook.svg"



function Footer() {
    return(
      
  <div className={styles.FooterContainer}>

    <div className={styles.FooterLeft}>
  <div className={styles.FooterLogo}>
    <img src={SOClogo} alt="School of Code logo" className={styles.socLogo}/>
</div>
         

      <div className={styles.FooterPoweredByText}>
      <h4><span className={styles.blockSpan}>Powered By</span> <span className={styles.blockSpan}>School of Code</span></h4>
      </div>
      </div>
     
     <div className={styles.FooterRight}>

       <div className={styles.FooterConnectText}>
       <h4 className={styles.connectWithUs}>Connect with us</h4>
       </div>

      <div className={styles.FooterMediaIcon}>
      <img className={styles.socialLogo} src={TwitterLogo} alt="Twitter logo"/>
      <img className={styles.socialLogo} src={LinkedInLogo} alt="Linkedin Logo"/>
      <img className={styles.socialLogo} src={EmailLogo} alt="Email Logo"/>
      <img className={styles.socialLogo} src={FacebookLogo} alt="Facebook Logo"/>
     </div>

     </div>
     
       </div>
    )
}
  
  export default Footer;
