import Slide from "./Slide/Main";
import Frame from "./Frame/Main";
import styles from "./Gun.module.css";
import Barrel from "./Barrel/Main";

const Gun = () => {
  window.addEventListener("resize", () => {
    const minWidth = 800;
    const minHeight = 700;

    if (window.innerWidth < minWidth || window.innerHeight < minHeight) {
      alert("창 크기를 키워주세요 (최소크기: width: 800, height: 700)");
    }
  });
  return (
    <div className={styles.container}>
      <Barrel />
      <Slide />
      <Frame />
    </div>
  );
};

export default Gun;
