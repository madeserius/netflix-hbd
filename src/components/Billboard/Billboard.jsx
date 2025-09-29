import React, { useState } from 'react';

import PlayIcon from './PlayIcon';
import InfoIcon from './InfoIcon';
import VideoModal from '../VideoModal';

import billboardHeroImg from './assets/billboard.jpeg';
// Gunakan gambar default dulu, nanti bisa diganti dengan foto personal


import styles from './Billboard.module.css';

const Billboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePlayClick = (e) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

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
                        <button onClick={handlePlayClick}>
                            <PlayIcon />
                            <span>Mulai Perayaan</span>
                        </button>
                        <button type="button">
                            <InfoIcon />
                            <span>Kenangan Kita</span>
                        </button>
                    </div>
                </div>
            </div>

            <VideoModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                videoSrc={billboardHeroImg}
                youtubeUrl="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                title="Happy 26th Birthday!"
                year="2025"
                duration="Perayaan Spesial"
                rating="18+"
                description="Selamat ulang tahun yang ke-26! Semoga di usia yang baru ini, kamu selalu diberkahi kesehatan, kebahagiaan, dan kesuksesan dalam segala hal. Terima kasih sudah menjadi bagian penting dalam hidup ini. Mari rayakan hari istimewa ini bersama dengan penuh cinta dan kegembiraan! ❤️"
                genres={["Perayaan", "Romantis", "Kenangan Indah"]}
            />
        </div>
    );
};

export default Billboard;
