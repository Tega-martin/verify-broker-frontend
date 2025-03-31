/* Header.js */
import React from "react";
import styles from "./Header.module.css";
import '../../index.css'
import { FaPhoneAlt } from "react-icons/fa";
import logo from '../../assets/finra-logo-green.png'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Verifyabroker logo" className={styles.logo} />
      </div> 
      <div className={styles.rightSection}>
      
        <button className={styles.feedbackButton}>Feedback</button> 
        <div className={styles.helpLine}>
          <FaPhoneAlt />
          <h5 className={styles.v_details}>VerifyABroker <span>
          Help Line
          </span>
            
          </h5>
        </div> 
      </div>
    </header>
  );
};

export default Header;
