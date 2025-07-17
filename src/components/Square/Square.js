import React, { useEffect, useRef } from 'react';
import styles from './Square.module.css';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';

const AssistantCard = ({ title, description, icon }) => {
  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };
  
  const playerRef1 = useRef(null);
  
  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);
  
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.icon}`, {
      duration: 1000,
      distance: "100px",
      origin: "left",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Player 
            icon={icon} 
            ref={playerRef1} 
            size="100%" 
            onComplete={handleComplete}
          />
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default AssistantCard;