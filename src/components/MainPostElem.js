import styles from "../styles/Frame.module.css";
import wireframeImg from "../image/wireframe_img.png";

export function MainPostElem() {
    return (
        <article className={styles.MainPostElem}>
            <img src={wireframeImg} className={styles.MainPostElemSection}></img>
            <div className={styles.MainPostElemSection}>
                <p className={styles.MainPostTitle}>aaaa</p>
                <p className={styles.MainPostTitleThumbnail}>bbbb</p>
            </div>
            <div className={styles.MainPostElemSection}>
                <p className={styles.MainPostAuthor}>devinssh</p>
                <p className={styles.MainPostDate}>aa</p>
            </div>
        </article>
    );
}