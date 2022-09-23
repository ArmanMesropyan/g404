import React from 'react';
import './style.scss'
import HowItWork from "./components/how-work";
import YourIdeas from "./components/your-ideas";
import StartNow from "./components/start-now";

const HomeInfoSection = () => {
    return (
        <div className='L-home-info-section-wrapper '>
            <div className='G-container'>
                <HowItWork/>
                <YourIdeas/>
                <StartNow/>
            </div>
        </div>
    );
};

export default HomeInfoSection;
