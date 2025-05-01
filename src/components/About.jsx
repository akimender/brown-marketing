import React from 'react';
import '../styles/About.css'

const About = () => {
    return (
        <div className="about-container" id="About">
            <h1>About Us</h1>
            <div className="text-image">
                <div className="text-block">
                    <p>
                        Brown Marketing Club helps students explore and pursue a career in marketing through speaker panels, networking opportunities, professional help, and hands-on experience with real-world marketing projects. Members will drive engagement for multiple types of businesses and learn about topics such as market research, consumer demographics, market trends, branding, content creation, and presentation.
                    </p>

                    <p>
                        Brown University does not offer many courses or opportunities to learn about and experience marketing. BMC strives to create a marketing community so that anyone interested in marketing can join, learn, and gain hands-on experience. 
                    </p>
                </div>
                <img src="bmc_logo.png" alt="BMC Logo" className="bmc-logo"></img>
            </div>

        </div>
    );
};

export default About;