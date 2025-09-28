import React from 'react';
import styles from './ProfileSelector.module.css';

// Import profile photos
import profile1 from './assets/profile-1.jpeg';
import profile2 from './assets/profile-2.jpeg';
import profile3 from './assets/profile-3.jpeg';
import profile4 from './assets/profile-4.jpeg';
import profile5 from './assets/profile-5.jpeg';

const ProfileSelector = ({ onProfileSelect }) => {
    const profiles = [
        { id: 1, image: profile1 },
        { id: 2, image: profile2 },
        { id: 3, image: profile3 },
        { id: 4, image: profile4 },
        { id: 5, image: profile5 }
    ];

    const handleProfileClick = (profileId) => {
        onProfileSelect(profileId);
    };

    return (
        <div className={styles.profileSelector}>
            <div className={styles.container}>
                <h1 className={styles.title}>Siapa yang menonton?</h1>

                <div className={styles.profilesGrid}>
                    {profiles.map((profile) => (
                        <div
                            key={profile.id}
                            className={styles.profileItem}
                            onClick={() => handleProfileClick(profile.id)}
                        >
                            <div className={styles.profileAvatar}>
                                <img
                                    src={profile.image}
                                    alt={`Profile ${profile.id}`}
                                    className={styles.profileImage}
                                />
                            </div>
                            <div className={styles.profileNumber}>{profile.id}</div>
                            <div className={styles.lockIcon}>🔒</div>
                        </div>
                    ))}
                </div>

                <button className={styles.manageButton}>
                    Kelola Profil
                </button>
            </div>
        </div>
    );
};

export default ProfileSelector;