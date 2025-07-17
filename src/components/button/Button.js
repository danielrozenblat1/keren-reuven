import React from 'react';
import styles from "./Button.module.css";

const Button = (props) => {
  const handleButtonClick = () => {
    const targetElement = document.getElementById("טופס");
    if (targetElement) {
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - 200;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.center}>
      <button className={styles.button} onClick={handleButtonClick}>
        <span className={styles.buttonContent}>
          {props.text}
        </span>
        <div className={styles.shine}></div>
      </button>
    </div>
  );
};

export default Button;