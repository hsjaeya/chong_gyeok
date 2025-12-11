import styles from "./Main.module.css";
const Frame = () => {
  return (
    <div className={styles.contaienr}>
      <div className={styles.frameTop1}>
        <div className={styles.frameTop1_1}></div>
        <div className={styles.frameTop1_2}></div>
      </div>

      <div className={styles.frameTop2}></div>

      <div className={styles.frameBottom}>
        <div className={styles.holeFrame}>
          <div className={styles.hole}></div>
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
