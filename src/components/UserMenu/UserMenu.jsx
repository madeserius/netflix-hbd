import React from 'react';

import profilePhoto from './assets/userMenu.jpeg';
import styles from './UserMenu.module.css';

const UserMenu = () => {
    return (
        <div className={styles.userMenu}>
            <img
                src={profilePhoto}
                alt="User Profile"
                className={styles.userProfile}
            />
        </div>
    );
};

export default UserMenu;
