import React from "react";
import styles from "./GalleryImg.module.css";

const GalleryImg = ({ img, name, amount, desc }) => {
  return (
    <div className={styles.galleryImg} style={{ background: `url('${img}')` }}>
      <div className={styles.text}>
        <div className={styles.name}>{name}</div>
        <div className={styles.amount}>{amount}</div>
        <div className={styles.desc}>{desc}</div>
      </div>
    </div>
  );
};

export default GalleryImg;
