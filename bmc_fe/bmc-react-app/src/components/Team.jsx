import React from 'react';
import '../styles/Team.css'

const Team = () => {
    return (
        <div className="team-container">
            <h1>Our Team</h1>
            <div className="team-member-container">
                <div className="team-member">
                    <img src="isabella_lee.jpg" alt="Isabella Lee" />
                    <h4>Isabella Lee</h4>
                    <p>President</p>
                </div>
                <div className="team-member">
                    <img src="erin_choi.jpg" alt="Erin J. Choi" />
                    <h4>Erin J. Choi</h4>
                    <p>Co-President</p>
                </div>
                <div className="team-member">
                    <img src="gabi_yuan.jpg" alt="Gabi Yuan" />
                    <h4>Gabi Yuan</h4>
                    <p>Client Relations</p>
                </div>
                <div className="team-member">
                    <img src="athena_djojo.jpg" alt="Athena Djojo" />
                    <h4>Athena Djojo</h4>
                    <p>Client Relations</p>
                </div>
                <div className="team-member">
                    <img src="maya_varma_wilson.jpg" alt="Maya Varma Wilson" />
                    <h4>Maya Varma Wilson</h4>
                    <p>Events Coordinator</p>
                </div>
                <div className="team-member">
                    <img src="matthew_chen.jpg" alt="Matthew Chen" />
                    <h4>Matthew Chen</h4>
                    <p>Finance Executive</p>
                </div>
                <div className="team-member">
                    <img src="gabriella_montalvo.jpg" alt="Gabriella Montalvo" />
                    <h4>Gabriella Montalvo</h4>
                    <p>Marketing</p>
                </div>
                <div className="team-member">
                    <img src="talia_blythe.jpg" alt="Talia Blythe" />
                    <h4>Talia Blythe</h4>
                    <p>Professional Development</p>
                </div>
                <div className="team-member">
                    <img src="andrew_kim.jpg" alt="Andrew Kim" />
                    <h4>Andrew Kim</h4>
                    <p>Website Manager</p>
                </div>
            </div>
        </div>
    );
};

export default Team;