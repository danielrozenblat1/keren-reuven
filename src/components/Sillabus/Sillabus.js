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

// גרסת התוכן המקורית:
// const syllabusData = [
//   {
//     month: 1,
//     title: "יצירת שינוי מהשורש",
//     items: [
//       { icon: Eye, text: "איתור הדינמיקה הרגשית והתקשורתית בבית" },
//       { icon: MessageSquare, text: "שיקוף רגשות ויצירת שפה רגשית חדשה" },
//       { icon: Zap, text: "התמודדות עם התפרצויות - זמן איפוס" },
//       { icon: CheckCircle, text: "סגירת סיטואציה - ניתוח ולמידה עם הילד" },
//       { icon: Heart, text: "בניית סמכות הורית רגועה ובטוחה" }
//     ]
//   },
//   {
//     month: 2,
//     title: "יישום הכלים החדשים",
//     items: [
//       { icon: MessageSquare, text: "שאלות העצמה - חיזוק הביטחון העצמי של הילד" },
//       { icon: Heart, text: "בניית שיח שמבוסס על אמון והקשבה" },
//       { icon: Target, text: "פיתוח מוטיבציה פנימית אצל הילד ומימוש עצמי" },
//       { icon: Users, text: "אחידות הורית - תיאום ושיתוף פעולה בין ההורים" },
//       { icon: Zap, text: "מניעת התנגשויות וטריגרים מראש" }
//     ]
//   },
//   {
//     month: 3,
//     title: "שימור הכלים ויצירת עצמאות הורית ארוכת טווח",
//     items: [
//       { icon: Eye, text: "פיתוח מודעות עצמית - הילד לומד לזהות רגשות ולהגיב" },
//       { icon: Heart, text: "בניית חוסן רגשי - הילד מתמודד מבלי לפגוע בעצמו או באחרים" },
//       { icon: CheckCircle, text: "שימור הרגלים בבית - יציבות, עקביות, שגרה רגועה" },
//       { icon: Users, text: "חיזוק הקשר הדיאדי - הורה וילד שנפגשים באמת" }
//     ]
//   }
// ];

const syllabusData = [
  {
    month: 1,
    title: "יצירת שינוי מהשורש",
    items: [
      { icon: Eye, text: "להבין מה באמת קורה בבית - הרגשות, הדינמיקה והתגובות" },
      { icon: MessageSquare, text: "לדבר עם הילד בצורה שעוזרת לו להבין את עצמו ואתכם" },
      { icon: Zap, text: "לדעת מה לעשות בזמן התפרצות - לעצור ולהרגיע את המצב" },
      { icon: CheckCircle, text: "איך לסגור רגעים קשים בצורה שמלמדת - בלי אשמה, עם קשר" },
      { icon: Heart, text: "לבנות גבולות ברורים - עם שקט, ביטחון ואהבה" }
    ]
  },
  {
    month: 2,
    title: "יישום הכלים החדשים שקיבלת",
    items: [
      { icon: MessageSquare, text: "לשאול שאלות שמעודדות את הילד להאמין בעצמו" },
      { icon: Heart, text: "ליצור שיח יומיומי עם הקשבה, אמון וחיבור אמיתי" },
      { icon: Target, text: "לעזור לילד לרצות בעצמו - לא לפעול מתוך פחד או פרסים" },
      { icon: Users, text: "להיות מתואמים כהורים - בלי בלבול ועם הסכמה" },
      { icon: Zap, text: "לזהות קונפליקט עוד לפני שהוא מתחיל - ולמנוע אותו מראש" }
    ]
  },
  {
    month: 3,
    title: "שימור הכלים ויצירת עצמאות הורית ארוכת טווח",
    items: [
      { icon: Eye, text: "לעזור לילד לזהות מה הוא מרגיש - ולבחור איך להגיב" },
      { icon: Heart, text: "ללמד את הילד להתמודד גם כשקשה - בלי לפגוע בעצמו או באחרים" },
      { icon: CheckCircle, text: "ליצור שגרה רגועה בבית - שתשמור על השינוי לאורך זמן" },
      { icon: Users, text: "לחזק את הקשר ביניכם - להיות נוכחים באמת, לא רק מגיבים" }
    ]
  }
];

const SyllabusComponent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.daysContainer}>
          {syllabusData.map((monthData) => (
            <div
              key={monthData.month}
              className={`${styles.dayCard} ${styles[`month${String(monthData.month).padStart(2, '0')}`]}`}
            >
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
