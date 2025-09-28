import React from 'react';

import Segment from '../Segment';

import styles from './Titles.module.css';

const Titles = () => {
    return (
        <div className={styles.titles}>
            <Segment title="Special Birthday Collection" />
            <Segment title="Our Love Story Moments" />
            <Segment title="26 Reasons Why You're Amazing" />
            <Segment title="Birthday Wishes & Dreams" />
            <Segment title="Memories Worth Rewatching" />
        </div>
    );
};

export default Titles;
