import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Overhead Dashboard</h1>
            </header>
            <main className="dashboard-main">
                <section className="dashboard-section">
                    <h2>Section 1</h2>
                    <p>Content for section 1</p>
                </section>
                <section className="dashboard-section">
                    <h2>Section 2</h2>
                    <p>Content for section 2</p>
                </section>
                <section className="dashboard-section">
                    <h2>Section 3</h2>
                    <p>Content for section 3</p>
                </section>
            </main>
        </div>
    );
};

export default Dashboard;