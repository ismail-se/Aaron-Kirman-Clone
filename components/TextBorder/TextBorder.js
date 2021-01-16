import React from 'react';
import styles from "./TextBorder.module.css"

const TextBorder = ({title}) => {
    return (
        <div className={styles.textBorder}>
            <div className={styles.border}> </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.border}> </div>
        </div>
    )
}

export default TextBorder
