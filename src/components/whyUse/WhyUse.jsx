import React from "react";
import styles from "./WhyUse.module.css";
import Image1 from "../../assets/whyuse_1.png";
import Image2 from "../../assets/whyuse_2.png";
import Image3 from "../../assets/whyuse_3.png";
import LogoSection from "../trust-brand/LogoSection";

const WhyUse = () => {
  return (
      <>
  <LogoSection/>
    <section className={styles.whyUseContainer}>
     
      <h2 className={styles.heading}>Why Use VERIFYABROKER?</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img src={Image1} alt="Icon 1" className={styles.image} />
          <p className={styles.text}>
            VERIFYABROKER helps you make informed choices about brokers and
            provides easy access to investment adviser information.
          </p>
        </div>
        <div className={styles.card}>
          <img src={Image2} alt="Icon 2" className={styles.image} />
          <p className={styles.text}>
            VERIFYABROKER tells you instantly whether a person is registered, as
            required by law, to sell securities (stocks, bonds, mutual funds and
            more), offer investment advice or both.
          </p>
        </div>
        <div className={styles.card}>
          <img src={Image3} alt="Icon 3" className={styles.image} />
          <p className={styles.text}>
            VERIFYABROKER gives you a snapshot of a broker's employment history,
            regulatory actions, and investment-related licensing information,
            arbitrations and complaints.
          </p>
        </div>
      </div>
      </section>
      </>
  );
};

export default WhyUse;
