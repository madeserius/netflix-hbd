import React from 'react';

import ChevronRightIcon from './ChevronRightIcon';

// Import birthday collection images
import birthdayImg1 from './assets/segment-Birthday-Collection-1.jpeg';
import birthdayImg2 from './assets/segment-Birthday-Collection-2.jpeg';
import birthdayImg3 from './assets/segment-Birthday-Collection-3.jpeg';
import birthdayImg4 from './assets/segment-Birthday-Collection-4.jpeg';
import birthdayImg5 from './assets/segment-Birthday-Collection-5.jpeg';
import birthdayImg6 from './assets/segment-Birthday-Collection-6.jpeg';
import birthdayImg7 from './assets/segment-Birthday-Collection-7.jpeg';


import styles from './Segment.module.css';

const Segment = ({ title }) => {
    const images = [birthdayImg1, birthdayImg2 , birthdayImg3, birthdayImg4, birthdayImg5, birthdayImg6, birthdayImg7];

    return (
        <div className={styles.segment}>
            <p className={styles.title}>
                {title}
                <span className={styles.icon}>
                    <svg width="8" height="8" viewBox="0 0 23 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.5 3L21 20.5L3.5 38"
                            stroke="white"
                            stroke-width="4"
                            stroke-linecap="square"
                            stroke-linejoin="round"
                        />
                    </svg>
                </span>
            </p>
            <div className={styles.row}>
                {images.map((image, index) => (
                    <div key={index} className={styles.imageContainer}>
                        <img src={image} alt={`Birthday Collection ${index + 1}`} />
                        <div className={styles.overlayLabels}>
                            <div className={styles.top10Badge}>
                                <span className={styles.top10Text}>TOP</span>
                                <span className={styles.top10Number}>10</span>
                            </div>
                        </div>

                        {/* Hover Overlay */}
                        <div className={styles.hoverOverlay}>
                            <div className={styles.hoverContent}>

                                

                              
                            </div>
                        </div>
                    </div>
                ))}
                <button className={styles.button}>
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
};

export default Segment;
