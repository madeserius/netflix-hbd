import React, { useState } from 'react';
import './App.css';
import './normalize.css';

import ProfileSelector from './components/ProfileSelector';
import Navigation from './components/Navigation';
import Billboard from './components/Billboard';
import Titles from './components/Titles';
import Footer from './components/Footer';

function App() {
    const [showProfileSelector, setShowProfileSelector] = useState(true);
    const [selectedProfile, setSelectedProfile] = useState(null);

    const handleProfileSelect = (profileId) => {
        setSelectedProfile(profileId);
        setShowProfileSelector(false);
    };

    if (showProfileSelector) {
        return <ProfileSelector onProfileSelect={handleProfileSelect} />;
    }

    return (
        <div className="App">
            <Billboard />
            <Navigation />
            <Titles />
            <Footer />
        </div>
    );
}

export default App;
