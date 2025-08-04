import Testimonials from "../components/newRecommends/NewRecommends"
import SyllabusComponent from "../components/Sillabus/Sillabus"
import styles from "./ThirdScreen.module.css"
import recommend1 from "../images/קרן ראובן המלצות תהליך 1.png"
import recommend2 from "../images/קרן ראובן המלצות תהליך 2.png"
import recommend3 from "../images/קרן ראובן המלצות תהליך 3.png"
import recommend4 from "../images/קרן ראובן המלצות תהליך 4.png"
import recommend5 from "../images/קרן ראובן המלצות תהליך 5.png"
import Button from "../components/button/Button"

const ThirdScreen=()=>{

  const images = [
    { src: recommend1 },
    { src: recommend2 },
    { src: recommend3 },
    { src: recommend4 },
  { src: recommend5 },
  ];
return <>
    <div className={styles.title}>במהלך השנים האחרונות</div>
          <div className={styles.description}>שמעתי על עוד אלפי אמהות שחוות את אותן הסיטואציות ואת אותם הקשיים שגם אני חוויתי בעצמי ובסוף היום מרגישות שהן לא מספיק טובות ואפילו אשמות במצב..</div>
      <div className={styles.description}>חשוב לי שתביני שזו לא אשמתך! פשוט אין לך עדיין את הכלים שיעזרו לך לנהל ולהתנהל נכון עם הילדים שלך</div>
          <div className={styles.title}>והחלטתי</div>
            <div className={styles.description}> שכל עוד אני יכולה ומסוגלת אני מתכוונת לעשות ה-כ-ל, 
        כדי שילדים והורים שחווים קשיים/אתגרים - לא יעברו את המסע הזה לבד.</div>
       <div className={styles.title}>אז תחזיקי חזק.. ככה זה הולך לעבוד:</div>
        <div className={styles.description}>3 חודשי ליווי שבסופם תגיעי למצב של הרמוניה בבית, שקט נפשי <br/>
         <strong>ותתחילי באמת להנות מהאמהות שלך</strong></div>
       <SyllabusComponent/>

              <div className={styles.title}>חשוב לי לציין</div>
    <div className={styles.description}>
  אני מאמינה באחריות הדדית - שלך כהורה ושלי כמנחת תהליך.  
  השיטה שלי מבוססת על תקשורת מקרבת, אינטליגנציה רגשית, גבולות ברורים והעצמה - והיא נבנתה בדיוק עבור הורים שמוכנים להתחייב באמת לשינוי.
  <br/><br/>
  ולכן, אני מעניקה <strong style={{ color: "#2c2c2c", backgroundColor: "#ffe7a3", padding: "4px 8px", borderRadius: "6px", display: "inline-block" }}>100% אחריות על התהליך</strong>.  
  אם את מגויסת ב-100% - את תראי תוצאות תוך שבועיים.  
  ממש כך. וזה לא הבטחה ריקה - זו התחייבות.  
  <br/><br/>
  כי כשיש שיטה שעובדת, ויש הורה שבא לעבוד - השינוי פשוט קורה.
</div>
       <div className={styles.title}>כמה מילים מהלקוחות שלי שעברו את התהליך</div>
        <div className={styles.description}>תגללו כלפי מעלה כדי לחשוף עוד המלצות</div>
       <Testimonials testimonialImages={images}/>
       <Button text="קרן בואי נדבר!"/>
      </>
}
export default ThirdScreen