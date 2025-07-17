import React from 'react';
import { 
  Heart, 
  Home, 
  Users, 
  Star, 
  TrendingUp,
  Baby,
  BookOpen,
  Target,
  MessageCircle
} from 'lucide-react';
import styles from "./WhoFits.module.css"
import Button from '../button/Button';
const ParentalGuidanceScreen = () => {
const items = [
  
    {
      text: "את חווה חוסר שיתוף פעולה, חוסר הקשבה וחוצפה מצד הילדים ורוצה לשנות את המצב הקיים",
      icon: <MessageCircle className={styles.icon} />
    },
    {
      text: "הילד שלך עובר התקפי זעם, ויכוחים ומשחקי כוח איתך",
      icon: <Target className={styles.icon} />
    },
    {
      text: "את מרגישה תסכול ולחץ ברוב שעות היום",
      icon: <Heart className={styles.icon} />
    },
    {
      text: "את מתמודדת עם מתחים וכעסים שמשפיעים על הילדים ויוצרים כאוס בבית",
      icon: <Home className={styles.icon} />
    },
    {
      text: "את רוצה ללמוד לראות באמת את הילד ולהבין למה הוא פועל כמו שהוא פועל",
      icon: <BookOpen className={styles.icon} />
    },
    {
      text: "את מוכנה להשקיע 15 דקות ביום בתהליך דיגיטלי שיביא לתוצאה",
      icon: <TrendingUp className={styles.icon} />
    },
    {
      text: "את מחפשת פתרון מעשי עם התחייבות לתוצאה שיביא לשקט, הרמוניה ותקשורת בריאה בבית",
      icon: <Star className={styles.icon} />
    }
  ];
  return <>
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>הליווי שלי מתאים לך אם</h1>
        
        <div className={styles.cardsGrid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.cardText}>{item.text}</span>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    <Button text="קרן אני מתאימה לליווי בואי נדבר"/>
    </div>
  </>;
};

export default ParentalGuidanceScreen;