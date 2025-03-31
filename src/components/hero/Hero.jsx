import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Background_1 from "../../assets/background_1.jpg";
import Background_2 from "../../assets/background_2.png";
import Background_3 from "../../assets/background_3.png";
import Background_4 from "../../assets/background_4.png";

const images = [Background_1, Background_2, Background_3, Background_4];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div
        className={styles.heroSlider}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.heroSlide}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
