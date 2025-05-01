import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ scrolled }) => {
    return (
        <div className={`dashboard-header ${scrolled ? 'scrolled' : ''}`}>
            <nav className={`dashboard-nav ${scrolled ? 'scrolled' : ''}`}>
                <button onClick={() => document.getElementById('About').scrollIntoView({ behavior: 'smooth' })}>About</button>
                <button onClick={() => document.getElementById('Team').scrollIntoView({ behavior: 'smooth' })}>Team</button>
                <button onClick={() => document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' })}>Projects</button>
                <button onClick={() => document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button>
            </nav>
        </div>
    );
};

export default Dashboard;