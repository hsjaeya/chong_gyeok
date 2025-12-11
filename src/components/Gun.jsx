import Slide from "./Slide/Main";
import Frame from "./Frame/Main";
import styles from "./Gun.module.css";

const Gun = () => {
  return (
    <div className={styles.container}>
      <Slide />
      <Frame />
    </div>
  );
};

export default Gun;
