import AssistantCard from "../components/Square/Square"
import { Heart, HelpCircle, Search } from "lucide-react"
import styles from "./SecondScreen.module.css"
import clock from "../icons/wired-outline-236-alarm-clock-hover-pinch (1).json"
import users from "../icons/wired-outline-265-emoji-angry-wrr-hover-pinch.json"
import battery from "../icons/wired-outline-2767-battery-levels-vertical-alt-morph-empty.json"
import mom from "../icons/wired-outline-1508-breastfeeding-hover-pinch.json"
import tired from "../icons/wired-outline-635-family-hover-pinch.json"
import house from "../icons/wired-outline-2534-work-life-balance-hover-pinch.json"
import IconTextComponent from "../components/can/Can"
const SecondScreen = () => {
   return <>
   <div className={styles.title}>את כאן מסיבה אחת</div>
   <div className={styles.description}>את כאן כי את רוצה לחזור להנות מלהיות אמא</div>
    <div className={styles.title}>כן.. גם לי לקח זמן לעכל את המשפט הזה פעם</div>
      <div className={styles.description}>כי בדיוק כמוך, גם אני זוכרת איך זה הרגיש בהתחלה - כל אותם חלומות שהיו לי על איזו אמא מדהימה אני הולכת להיות ועל איך הילדים שלי הולכים להנות ממני ולגדול אחרת מהצורה שאני גדלתי.</div>
           <div className={styles.title}>אבל אז.. המציאות דפקה בדלת</div>
            <div className={styles.row}>
<AssistantCard 
  icon={clock}
  title="הבקרים הפכו לסיר לחץ" 
  description="כל הדברים חייבים לתקתק.. לא לאחר לגנים ולמסגרות, להכין כריכים לילדים, לדאוג שהכל קורה בזמן ועל הדרך להתאפר ולהספיק להגיע גם לעבודה שלך..."
/>

<AssistantCard 
  icon={users}
  title="את מתמודד עם סיטואציות שלא הכרת" 
  description="אף אחד לא הכין אותך לרגעים שהילד שלך עושה סצנה במקום ציבורי, כשהוא מתווכח איתך על כל דבר קטן, כשהוא לא מקשיב כלל למה שאת אומרת - ואת מרגישה שאת לא יודעת איך להגיב בצורה נכונה"
/>

<AssistantCard 
  icon={battery}
  title="את מסיימת כל היום בתחושת עומס וחנק" 
  description="היום נגמר בשאלות כמו: ״מה הילד חושב עלי?״ ״אולי הגזמתי כשצעקתי היום..?״ ״למה אני מרגישה שקופה בבית שלי?״ ובמין תחושת אשמה ובאסה"
/>
          </div>
          
          <div className={styles.title}>ואז עולות המחשבות...</div>
          <div className={styles.row}>
    <IconTextComponent text="אולי אני סתם אמא גרועה" icon={mom}/>
      <IconTextComponent text="למה כל יום הופך להיות מאבק? אני עייפה מלהיות השוטר בבית" icon={tired}/>
        <IconTextComponent text="איך זה שאני עייפה מהילד שלי יותר מיום עבודה?" icon={house}/>
        
 {/*               <Heart color="black" strokeWidth={0.5} size={24} />
              <span></span>
            </div>
  <div className={styles.thoughtItem}>
   <HelpCircle color="black" strokeWidth={0.5} size={24} />
   <span>למה כל יום הופך להיות מאבק? אני עייפה מלהיות השוטר בבית</span>
 </div>
   <div className={styles.thoughtItem}>
   <Search color="black" strokeWidth={0.5} size={24} />
   <span>איך זה שאני עייפה מהילד שלי יותר מיום עבודה?</span> */}
      <div className={styles.title}>אני כאן להוכיח לך שאפשר אחרת</div>
        <div className={styles.description}>(ואפילו יותר מהר ממה שאת חושבת)</div>
          </div>
   </>
}

export default SecondScreen