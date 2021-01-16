import React from 'react';
import TextBorder from '../TextBorder/TextBorder';
import styles from './About.module.css';
import Button from '../Button/Button'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.imgWrapper}>
                <img src="/about-img.jpg" alt=""/>
            </div>
            <div className={styles.textWrapper}>
                <TextBorder title="About Aaron Kirman" />
                <div className={styles.para}>
                    <p>
                    Aaron Kirman, President of the Estates Division at Compass in Los Angeles, is one of the leading real estate agents in the U.S. and has repeatedly been named Top Agent in Los Angeles. He has an extensive client base featuring those who seek the luxury lifestyle including heads of industry, celebrities, royalty, major lending institutions and foreign investors.
                    </p>
                    <p>
                    As a prominent figure in the luxury real estate market, Aaron has received international acclaim from the architectural and estate communities and represents some of the most exclusive residences across the globe including: Frank Lloyd Wright's Ennis House, Richard Neutra's Kaufmann Residence, Frank Gehry's Schnabel House, Lions Gate by Paul Williams, and the only Oscar Niemeyer in North America.
                    </p>
                </div>
                <Button text="Read more" />
            </div>
        </div>
    )
}

export default About
