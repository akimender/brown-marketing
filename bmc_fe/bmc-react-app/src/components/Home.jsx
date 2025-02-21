import React, { useEffect } from 'react';

// STYLESHEET IMPORTS
import '../styles/Home.css';

// COMPONENT IMPORTS
import IntroScreen from './IntroScreen';
import Dashboard from './Dashboard';

const Home = () => {
    return (
        <>
            <Dashboard />
            <IntroScreen />
        </>
    );
};

export default Home;