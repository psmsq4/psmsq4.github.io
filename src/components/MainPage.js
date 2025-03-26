import { MainPostList } from './MainPostList.js';
import { Banner } from './Banner.js';
import styles from '../styles/Frame.module.css';

export function MainPage() {
    return (
        <div className={styles.Mainframe}>
            <Banner></Banner>
            <MainPostList />
        </div >
    )
}