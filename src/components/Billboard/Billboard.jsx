import React from 'react';

import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';

import billboardHeroImg from './assets/billboard.jpeg';
// Gunakan gambar default dulu, nanti bisa diganti dengan foto personal


import styles from './Billboard.module.css';

const Billboard = () => {
    return (
        <div className={styles.billboard}>
            <div className={styles.innerBillboard}>
                <img src={billboardHeroImg} alt="" />
                <div className={styles.fadeOut}></div>
                <div className={styles.info}>
                    <div className={styles.birthdayTitle}>
                        <h1 className={styles.mainTitle}>HAPPY 26TH</h1>
                        <h1 className={styles.mainTitle}>BIRTHDAY!</h1>
                        <h2 className={styles.subtitle}>A SPECIAL DAY FOR SOMEONE SPECIAL</h2>
                    </div>
                    <div className={styles.description}>
                    Selamat ulang tahun. Di usia 26 ini, semoga sehat, bahagia, dan segala rencana baik kamu berjalan lancar. ❤️
                    </div>
                    <div className={styles.links}>
                        <a href="/">
                            <PlayIcon />
                            <span>Mulai Perayaan</span>
                        </a>
                        <button type="button">
                            <InfoIcon />
                            <span>Kenangan Kita</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;
