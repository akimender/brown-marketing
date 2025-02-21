import React from 'react';
import '../styles/Join.css';

const Join = () => {
    return (
        <div>
            <h1>Join Us</h1>
            <p>Welcome to our community! Please fill out the form below to join us.</p>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <button type="submit">Join</button>
            </form>
        </div>
    );
};

export default Join;