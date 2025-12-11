import styles from "./Main.module.css";
const Frame = () => {
  return (
    <>
      <div className={styles.framTop1}></div>
      <div className={styles.framTop2}></div>
      <div className={styles.frameBottom}>
        <div className={styles.holeFrame}>
          <div className={styles.hole}></div>
        </div>
        <div className={styles.handleTop}></div>
      </div>
      <div className={styles.handleBottomUnder}>
        <div className={styles.handleScratch}></div>
      </div>
    </>
  );
};

export default Frame;
