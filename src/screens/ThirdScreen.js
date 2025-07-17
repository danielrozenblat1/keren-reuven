import SyllabusComponent from "../components/Sillabus/Sillabus"
import styles from "./ThirdScreen.module.css"
const ThirdScreen=()=>{
return <>
    <div className={styles.title}>במהלך השנים האחרונות</div>
          <div className={styles.description}>שמעתי על עוד אלפי אמהות שחוות את אותן הסיטואציות ואת אותם הקשיים שגם אני חוויתי בעצמי ובסוף היום מרגישות שהן לא מספיק טובות ואפילו אשמות במצב..</div>
      <div className={styles.description}>חשוב לי שתביני שזו לא אשמתך! פשוט אין לך עדיין את הכלים שיעזרו לך לנהל ולהתנהל נכון עם הילדים שלך</div>
          <div className={styles.title}>והחלטתי</div>
            <div className={styles.description}> שכל עוד אני יכולה ומסוגלת אני מתכוונת לעשות ה-כ-ל, 
        כדי שילדים והורים שחווים חיים קשים - לא יעברו את המסע הזה לבד.</div>
       <div className={styles.title}>אז תחזיקי חזק.. ככה זה הולך לעבוד:</div>
        <div className={styles.description}>3 חודשי ליווי שבסופם תגיעי למצב של הרמוניה בבית, שקט נפשי <br/>
         <strong>ותתחילי באמת להנות מהאמהות שלך</strong></div>
       <SyllabusComponent/>
      </>
}
export default ThirdScreen