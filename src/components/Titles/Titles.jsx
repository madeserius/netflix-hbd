import React from 'react';

import Segment from '../Segment';

import styles from './Titles.module.css';

const Titles = () => {
    return (
        <div className={styles.titles}>
            <Segment title="Special Birthday Collection" />
            <Segment title="Our Love Story Moments" />
        </div>
    );
};

export default Titles;
