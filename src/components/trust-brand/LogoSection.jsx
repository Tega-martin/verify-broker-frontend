import React from "react";
import styles from "./LogoSection.module.css";
import MetaTrader4 from "../../assets/meta4.png";
import Coinbase from "../../assets/coinbase.png";
import Blockchain from "../../assets/blockchain.png"; 
import Blockchain2 from "../../assets/blockchain2.png"; 
import Crypto from "../../assets/crypto.png";
import Binance from "../../assets/binance.png";
import JPMorgan from "../../assets/jpmorgan.png";
import Verified from "../../assets/verified.png";
import SEC from "../../assets/sss.png";
import BrokerID from "../../assets/brokerid.png";

const logos = [
  { src: MetaTrader4, alt: "MetaTrader 4" },
  { src: Coinbase, alt: "Coinbase" },
  { src: Blockchain, alt: "Blockchain" },
  
  { src: Crypto, alt: "Crypto.com" },
  { src: Blockchain2, alt: "Blockchain2" },
  { src: Binance, alt: "Binance" },
  { src: JPMorgan, alt: "JPMorgan Chase & Co." },
  { src: Verified, alt: "Verified" },
  { src: SEC, alt: "U.S. Securities and Exchange Commission" },
  { src: BrokerID, alt: "Broker ID" },
];

const LogoSection = () => {
  return (
    <div className={styles.logosContainer}>
      {logos.map((logo, index) => (
        <img key={index} src={logo.src} alt={logo.alt} className={styles.logoItem} loading="lazy" />
      ))}
    </div>
  );
};

export default LogoSection;
