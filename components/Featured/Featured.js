import React from 'react';
import Button from '../Button/Button';
import TextBorder from '../TextBorder/TextBorder';
import styles from "./Featured.module.css"

const Featured = () => {
    return (
        <div className={styles.featured}>
            <div className={styles.centerMargin}>
            <TextBorder title="As Featured In" />
            </div>
            <div className={styles.centerMargin}>
            <Button text="Aaron in the media" />
            </div>
        </div>
    )
}

export default Featured
