import { useState, useEffect } from 'react';
import { MainPostElem } from './MainPostElem.js';
import { AddButton } from './AddButton.js';
import styles from "../styles/Frame.module.css";

export function MainPostList() {
    const [mainPostData, setMainPostData] = useState([
        {
            title: "mockup"
        },
        {
            title: "mockup"
        },
    ]);

    const handleActionButton = () => {
        setMainPostData(prevData => {
            const updatedData = [...prevData, { title: "mockup2" }];
            console.log(updatedData);  // ✅ 최신 상태 확인 가능
            return updatedData;
        });
    };

    useEffect(() => {
        console.log(mainPostData);
    })

    return (
        <main className={styles.MainPostListStyle}>
            <div className={styles.MainPostHeader}> {/* 최신 글 */}
                <p>CS 작성글</p>
                <AddButton onClick={handleActionButton} />
            </div>
            <hr style={{ width: "100%", height: "2px", backgroundColor: "blue" }}></hr>
            {mainPostData.map(() => <MainPostElem />)}
        </main>
    );
}