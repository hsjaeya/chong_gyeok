import styles from "./Main.module.css";
import { useEffect, useRef } from "react";
const Frame = () => {
  const rootRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "t" && rootRef.current) {
        rootRef.current.classList.remove(styles.animate);
        void rootRef.current.offsetWidth;
        rootRef.current.classList.add(styles.animate);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.frameTop1}>
        <div className={styles.frameTop1_1}></div>
        <div className={styles.frameTop1_2}></div>
      </div>

      <div className={styles.frameTop2}></div>

      <div className={styles.frameBottom}>
        <div className={styles.holeFrame}>
          <div className={styles.hole}></div>
          <div ref={rootRef} className={styles.trigger}></div>
        </div>
        <div className={styles.handleTop}></div>
      </div>
      <div className={styles.handleBottomUnder}></div>
      <div className={styles.handleScratchTop}></div>
      <div className={styles.handleScratchBottom}></div>
    </div>
  );
};

export default Frame;
