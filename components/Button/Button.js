import Link from 'next/link';
import styles from "./Button.module.css"

const Button = ({link, text}) => {
    return (
        <div className={styles.button}>
            <Link href="/">
                <a>
                    <button>{text}</button>
                </a>
            </Link>
        </div>
    )
}

export default Button
