import React, { useState } from 'react';
import './App.css';
import './normalize.css';

import ProfileSelector from './components/ProfileSelector';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';

// Import profile photos
import profile1 from './components/ProfileSelector/assets/profile-1.jpeg';
import profile2 from './components/ProfileSelector/assets/profile-2.jpeg';
import profile3 from './components/ProfileSelector/assets/profile-3.jpeg';
import profile4 from './components/ProfileSelector/assets/profile-4.jpeg';
import profile5 from './components/ProfileSelector/assets/profile-5.jpeg';

function App() {
    const [showProfileSelector, setShowProfileSelector] = useState(true);
    const [showLoading, setShowLoading] = useState(false);
    const [showMainApp, setShowMainApp] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);

    const profiles = [
        { id: 1, image: profile1 },
        { id: 2, image: profile2 },
        { id: 3, image: profile3 },
        { id: 4, image: profile4 },
        { id: 5, image: profile5 }
    ];

    const handleProfileSelect = (profileId) => {
        const profile = profiles.find(p => p.id === profileId);
        setSelectedProfile(profile);
        setShowProfileSelector(false);
        setShowLoading(true);
    };

    const handleLoadingComplete = () => {
        setShowLoading(false);
        setShowMainApp(true);
    };

    if (showProfileSelector) {
        return <ProfileSelector onProfileSelect={handleProfileSelect} />;
    }

    if (showLoading) {
        return <LoadingScreen onComplete={handleLoadingComplete} selectedProfile={selectedProfile} />;
    }

    if (showMainApp) {
        return (
            <div className="App">
                <Billboard />
                <Navigation />
                <Titles />
                <Footer />
            </div>
        );
    }

    return null;
}

export default App;
