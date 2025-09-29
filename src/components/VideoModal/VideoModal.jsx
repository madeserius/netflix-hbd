import React, { useState } from 'react';
import styles from './VideoModal.module.css';

const VideoModal = ({ isOpen, onClose, videoSrc, youtubeUrl, title, year, duration, rating, description, genres }) => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handlePlayVideo = () => {
        setIsVideoPlaying(true);
    };

    const handleCloseVideo = () => {
        setIsVideoPlaying(false);
    };

    // Extract YouTube video ID from URL
    const getYouTubeVideoId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getYouTubeVideoId(youtubeUrl);

    // Fullscreen video player
    if (isVideoPlaying && videoId) {
        return (
            <div className={styles.fullscreenVideo}>
                <button className={styles.fullscreenCloseButton} onClick={handleCloseVideo}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <iframe
                    className={styles.youtubePlayer}
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        );
    }

    return (
        <div className={styles.overlay} onClick={handleOverlayClick}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                <div className={styles.videoContainer}>
                    <div className={styles.video}>
                        <img
                            src={videoSrc}
                            alt={title}
                            className={styles.videoPlaceholder}
                        />
                        <div className={styles.videoOverlay}>
                            <div className={styles.videoControls}>
                                <button className={styles.playButton} onClick={handlePlayVideo}>
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.videoInfo}>
                        <div className={styles.titleSection}>
                            <h2 className={styles.title}>{title}</h2>
                            <div className={styles.actionButtons}>
                                <button className={styles.playBtn} onClick={handlePlayVideo}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z"/>
                                    </svg>
                                    <span>Putar</span>
                                </button>
                                <button className={styles.iconButton}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                    </svg>
                                </button>
                                <button className={styles.iconButton}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className={styles.metaInfo}>
                            <span className={styles.year}>{year}</span>
                            <span className={styles.duration}>{duration}</span>
                            <span className={styles.quality}>HD</span>
                            <span className={styles.rating}>{rating}</span>
                        </div>

                        <div className={styles.description}>
                            {description}
                        </div>

                        <div className={styles.genres}>
                            <span className={styles.genreLabel}>Genre: </span>
                            {genres?.map((genre, index) => (
                                <span key={index}>
                                    {genre}
                                    {index < genres.length - 1 && ', '}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;