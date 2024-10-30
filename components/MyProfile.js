import React from "react";
import './MyProfile.css';

const MyProfile = () => {
    return (
        <div className="profile-container">
            <div className="profile-header">
                <img 
                    src="https://www.famousbirthdays.com/faces/cong-tv-image.jpg" 
                    alt="Profile" 
                    className="profile-image" 
                />
                <h1 className="profile-name">Cong TV</h1>
                <p className="profile-bio">Web Developer | Tech Enthusiast | Lifelong Learner</p>
            </div>
            <div className="profile-info">
                <h2>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                <h2>Contact Information</h2>
                <p>Email: cong.clothing@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
    );
};

export default MyProfile;
