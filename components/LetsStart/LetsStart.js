import React from "react";
import styles from "./LetsStart.module.css";
import TextBorder from "../TextBorder/TextBorder";
import SquareButton from "../SquareButton/SquareButton";

const LetsStart = () => {
  return (
    <div className={styles.letsStart}>
      <div className={styles.text}>
        <TextBorder title="Let's Get Started" />
      </div>
      <div className={styles.buttons}>
        <SquareButton text="sell my" />
        <SquareButton text="Buy a" />
        <SquareButton text="Value my" />
      </div>
    </div>
  );
};

export default LetsStart;
