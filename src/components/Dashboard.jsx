import React, { useEffect, useState } from 'react';
import '../styles/Dashboard.css';

const Dashboard = ({ scrolled }) => {
    return (
        <div className={`dashboard-header ${scrolled ? 'scrolled' : ''}`}>
            <nav className={`dashboard-nav ${scrolled ? 'scrolled' : ''}`}>
                <button>About</button>
                <button>Team</button>
                <button>Projects</button>
                <button>Contact</button>
            </nav>
        </div>
    );
};

export default Dashboard;