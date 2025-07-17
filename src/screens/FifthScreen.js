import React from 'react';
import styles from './FifthScreen.module.css';
import hoveret from "../images/קרן ראובן חוברת.png"
const HeaderComponent = () => {
  const handleImageClick = () => {
    window.open('https://kerenagami.my.canva.site/buyhoveret', '_blank');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        רוצה לקבל ממני טעימה לפני הליווי המלא?
      </h1>
      <p className={styles.description}>
        לחוברת המקיפה שלי להדרכת הורים תלחצי על התמונה:
      </p>
      <div className={styles.imageContainer}>
        <img 
          src={hoveret}
          alt="לחוברת המקיפה להדרכת הורים"
          className={styles.image}
          onClick={handleImageClick}
        />
      </div>

    </div>
  );
};

export default HeaderComponent;