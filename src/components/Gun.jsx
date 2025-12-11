import Slide from "./Slide/Main";
import Frame from "./Frame/Main";
import styles from "./Gun.module.css";
import Barrel from "./Barrel/Main";

const Gun = () => {
  return (
    <div className={styles.container}>
      <Barrel />
      <Slide />
      <Frame />
    </div>
  );
};

export default Gun;
