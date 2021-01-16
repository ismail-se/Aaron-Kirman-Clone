import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <nav>
                <ul>
                    <li>ABOUT</li>
                    <li>MEDIA</li>
                    <li>PROPERTIES</li>
                    <li className={styles.contact}>CONTACT</li>
                    <li className={styles.menu}><img src="/menu.svg" alt=""/></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
