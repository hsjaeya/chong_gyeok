import { useEffect, useRef } from "react";
import styles from "./Main.module.css";
import FrontSight from "./FrontSight";
import RearSight from "./RearSight";

const Slide = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "s" && rootRef.current) {
        setTimeout(function () {
          rootRef.current.classList.remove(styles.animate);
          void rootRef.current.offsetWidth;
          rootRef.current.classList.add(styles.animate);
        }, 70);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={rootRef} className={styles.rootContainer}>
      <div className={styles.sight}>
        <FrontSight />
        <RearSight />
      </div>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoContainer}>콜록</div>
        </div>
        <div className={styles.number1}>17</div>
        <div className={styles.country}>AUSTRIA</div>
        <div className={styles.number2}>9x19</div>
        <div className={styles.rearSerrationsContainer}>
          {[...Array(7)].map((_, i) => (
            <div key={i} className={styles.rearSerrations} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide;
