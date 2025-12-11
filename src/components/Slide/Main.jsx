import styles from "./Main.module.css";
import FrontSight from "./FrontSight";
import RearSight from "./RearSight";

const Slide = () => {
  return (
    <div className={styles.rootContainer}>
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
          <div className={styles.rearSerrations} />
          <div className={styles.rearSerrations} />
          <div className={styles.rearSerrations} />
          <div className={styles.rearSerrations} />
          <div className={styles.rearSerrations} />
          <div className={styles.rearSerrations} />
          <div className={styles.rearSerrations} />
        </div>
      </div>
    </div>
  );
};

export default Slide;
