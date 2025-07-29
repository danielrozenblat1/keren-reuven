import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import editPhoto from "../../images/קרן ללא רקע.png";
import ScrollReveal from 'scrollreveal';

const AboutMe = () => {
  const containerRef = useRef(null);

  // ScrollReveal configuration
  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });
    }

    return () => {
      ScrollReveal().destroy();
    };
  }, []);

  // Handle button click to navigate to form
  const handleFormNavigation = () => {
    const formElement = document.getElementById('טופס');
    if (formElement) {
      const yOffset = -200;
      const y = formElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section ref={containerRef} className={styles.section} id="מי-אני">
        <div className={styles.container}>
          <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
            <img src={editPhoto} alt="קרן ראובן" className={styles.image} />
          </div>

          <div className={`${styles.content} ${styles.revealItem}`}>
            <h2 className={styles.mainTitle}>נעים מאוד, קרן ראובן</h2>

            <div className={styles.quoteContainer}>
              <p className={styles.quote}>
                "תתנהג כמו שהיית רוצה שהילד שלך יתנהג."
              </p>
            </div>

            <div className={styles.textBlock}>
              <p className={styles.paragraph}>
               אני זוכרת איך חלמתי להיות אמא פעילה, להנות באמת מהילד שלי. 
          <strong>     ולחוות את ההורות שתמיד חלמתי עליה </strong>
              </p>

              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                אבל בפועל? המציאות הייתה אחרת. התקפי זעם, ויכוחים, משחקי כוח, והרגשה שהילד לא רואה אותי ממטר ושאני לא רואה באמת את הילד שלי. 
                אבל לא וויתרתי. אחרי החוויה עם הילד הראשון החלטתי שהילד השני יגדל אחרת - החלטתי ללמוד איך להיות האמא שתמיד רציתי להיות. 
                הכלים שקיבלתי עזרו לי לעשות שינוי אמיתי - הילד התחיל לשתף פעולה יותר, הבית נהיה שקט יותר, ופתאום ראיתי איך הקשר שלנו משתנה לטובה. 
       
              </p>

              <div className={styles.divider}></div>

              <p className={styles.paragraph}>
                היום, כאמא לשני ילדים, מדריכת הורים, יועצת זוגית ויועצת דיאדית אני יודעת בדיוק איך את מרגישה כשאת צועקת על הילד בבוקר ואז מרגישה אשמה כל היום.
                אני מעבירה תהליכי ליווי אישיים ומשפחתיים לאימהות ואבות שמחפשים להעניק לילדים שלהם כלים לבחור נכון עבור עצמם, מתוך עמדה של ביטחון ותחושת מסוגלות עצומה.
              </p>

              <p className={styles.paragraph}>
                התהליך פרטני וייחודי לכל משפחה. כל הכלים שתקבלו ממני, יהיו מדויקים לסיטואציות שיקרו בזמן אמת בבית שלכם - בלי חירטוטים, כל האמת בפרצוף :)
                הליווי הוא על בסיס יומיומי ולכן כבר בתוך שבועיים רואים שינוי משמעותי, ואחרי שלושה חודשים תצאו משפחה מגובשת מועצמת מלאת ביטחון, רגועה יותר ומכילה.
              </p>

              <p className={styles.finalText}>
                כי לכל הורה מגיע לחוות שיתוף פעולה עם הילד שלו ולהנות מההורות - עם שלום בית אמיתי.
              </p>
            </div>

            <button 
              className={styles.ctaButton}
              onClick={handleFormNavigation}>
              <span className={styles.buttonIcon}>💬</span>
              בואי נדבר על הההורות שמגיעה לך
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;