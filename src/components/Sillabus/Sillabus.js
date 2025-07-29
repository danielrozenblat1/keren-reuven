// JSX Component - Updated
import React from 'react';
import styles from './Sillabus.module.css';
import {
  CheckCircle,
  MessageSquare,
  Zap,
  Heart,
  Target,
  Eye,
  Users
} from 'lucide-react';

const SyllabusComponent = () => {
  const syllabusData = [
    {
      month: 1,
      title: "יצירת שינוי מהשורש",
      items: [
        { icon: Eye, text: "איתור הדינמיקה הרגשית והתקשורתית בבית" },
        { icon: MessageSquare, text: "שיקוף רגשות ויצירת שפה רגשית חדשה" },
        { icon: Zap, text: "התמודדות עם התפרצויות – זמן איפוס" },
        { icon: CheckCircle, text: "סגירת סיטואציה – ניתוח ולמידה עם הילד" },
        { icon: Heart, text: "בניית סמכות הורית רגועה ובטוחה" }
      ]
    },
    {
      month: 2,
      title: "יישום הכלים החדשים",
      items: [
        { icon: MessageSquare, text: "שאלות העצמה – חיזוק הביטחון העצמי של הילד" },
        { icon: Heart, text: "בניית שיח שמבוסס על אמון והקשבה" },
        { icon: Target, text: "פיתוח מוטיבציה פנימית אצל הילד ומימוש עצמי" },
        { icon: Users, text: "אחידות הורית – תיאום ושיתוף פעולה בין ההורים" },
        { icon: Zap, text: "מניעת התנגשויות וטריגרים מראש" }
      ]
    },
    {
      month: 3,
      title: "שימור הכלים ויצירת עצמאות הורית ארוכת טווח",
      items: [
        { icon: Eye, text: "פיתוח מודעות עצמית – הילד לומד לזהות רגשות ולהגיב" },
        { icon: Heart, text: "בניית חוסן רגשי – הילד מתמודד מבלי לפגוע בעצמו או באחרים" },
        { icon: CheckCircle, text: "שימור הרגלים בבית – יציבות, עקביות, שגרה רגועה" },
        { icon: Users, text: "חיזוק הקשר הדיאדי – הורה וילד שנפגשים באמת" }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.daysContainer}>
          {syllabusData.map((monthData, index) => (
            <div key={monthData.month} className={`${styles.dayCard} ${styles[`month${String(monthData.month).padStart(2, '0')}`]}`}>
              <div className={styles.dayHeader}>
                              <div className={styles.dayNumber}>0{monthData.month}</div>
                <h3 className={styles.dayTitle}>{monthData.title}</h3>
  
              </div>
              
              <div className={styles.itemList}>
                {monthData.items.map((item, itemIndex) => (
                  <div key={itemIndex} className={styles.item}>
                    <item.icon className={styles.itemIcon} strokeWidth={1.5} />
                    <span className={styles.itemText}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyllabusComponent;