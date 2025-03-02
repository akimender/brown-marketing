import React from 'react';
import '../styles/IntroScreen.css'

const IntroScreen = ({ scrolled }) => {
    return (
        <div className="intro-screen-container">
            <img src="brown_university_cover.jpg" alt="Brown University Cover" className="intro-screen-image" />
            <div className={`intro-screen-text ${scrolled ? 'scrolled' : ''}`}>
                <h1>Brown Marketing Club</h1>
                <p>Where Creativity Meets Strategy to Innovate the Future of Marketing</p>
            </div>
        </div>
    );
};

export default IntroScreen;