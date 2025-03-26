import styles from '../styles/Banner.module.css';
import menuIcon from '../image/icons/menu.svg';
import searchIcon from '../image/icons/search.svg';

export function Banner() {
    return (
        <header className={styles.banner}>
            <img src={menuIcon}></img>
            <p>DevInSSH</p>
            <img src={searchIcon}></img>
        </header>
    );
}