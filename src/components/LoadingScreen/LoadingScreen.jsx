import React, { useEffect } from 'react';
import styles from './LoadingScreen.module.css';

const LoadingScreen = ({ onComplete, selectedProfile }) => {
    useEffect(() => {
        // Simulate loading time (3 seconds)
        const timer = setTimeout(() => {
            onComplete();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className={styles.loadingScreen}>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    {selectedProfile ? (
                        <div className={styles.profileContainer}>
                            <img
                                src={selectedProfile.image}
                                alt={`Profile ${selectedProfile.id}`}
                                className={styles.profileImage}
                            />
                            <h2 className={styles.profileName}>Profile {selectedProfile.id}</h2>
                        </div>
                    ) : (
                        <h1 className={styles.netflixLogo}>NETFLIX</h1>
                    )}
                </div>

                <div className={styles.loadingBarContainer}>
                    <div className={styles.loadingBar}>
                        <div className={styles.loadingProgress}></div>
                    </div>
                </div>

                <div className={styles.loadingText}>
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;