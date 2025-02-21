import React, { useState, useEffect } from 'react';

// STYLESHEET IMPORTS
import '../styles/Home.css';

// COMPONENT IMPORTS
import IntroScreen from './IntroScreen';
import Dashboard from './Dashboard';
import About from './About';
import Team from './Team';
import Projects from './Projects';

const Home = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Dashboard scrolled={scrolled} />
            <IntroScreen scrolled={scrolled} />
            <About />
            <Team />
            <Projects />
        </>
    );
};

export default Home;