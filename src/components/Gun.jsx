import Slide from "./Slide/Main";
import Frame from "./Frame/Main";
import styles from "./Gun.module.css";
import Barrel from "./Barrel/Main";
import { useRef, useEffect } from "react";

const Gun = () => {
  window.addEventListener("resize", () => {
    const minWidth = 800;
    const minHeight = 600;

    if (window.innerWidth < minWidth || window.innerHeight < minHeight) {
      // alert("창 크기를 키워주세요 (최소크기: width: 800, height: 700)");
      document.body.style.visibility = "hidden";
    } else {
      // document.body.style.display = "block";
      document.body.style.visibility = "visible";
    }
  });

  const rootRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key.toLowerCase() === "r" && rootRef.current) {
        rootRef.current.classList.remove(styles.animate);
        void rootRef.current.offsetWidth;
        rootRef.current.classList.add(styles.animate);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={rootRef} className={styles.container}>
      <Barrel />
      <Slide />
      <Frame />
    </div>
  );
};

export default Gun;
