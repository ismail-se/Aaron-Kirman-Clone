import React from "react";
import TextBorder from "../TextBorder/TextBorder";
import styles from "./Kirman.module.css";
import Button from "../Button/Button";

const Kirman = () => {
  return (
    <div className={styles.about}>
      <div className={styles.textWrapper}>
        <TextBorder title="Kirman Foundation" />
        <div className={styles.para}>
          <p>
            The Kirman Foundation is a non-profit organization that focuses on
            helping those in need from dogs to humans. We are actively engaged
            in fighting homelessness in Los Angeles, the Humane Society of Los
            Angeles and San Gabriel, and finding a solution to rebuilding homes
            lost in Puerto Rico.
          </p>
        </div>
        <Button text="Know more" />
      </div>
      <div className={styles.imgWrapper}>
        <div className={styles.img}></div>
      </div>
    </div>
  );
};

export default Kirman;
