import React from 'react';
import styles from "./SquareButton.module.css";

const SquareButton = ({ text }) => {
    return (
        <div className={styles.square}>
            <button>
                { text } <br/> <span>HOME</span>
            </button>
        </div>
    )
}

export default SquareButton
