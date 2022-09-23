import React from 'react';
import './style.scss'
const HowItWork = () => {
    return (
        <div className='L-how-it-work'>
            <h5>How It Works</h5>
            <div className='L-how-it-work-content'>
                <div className='L-how-it-work-child G-flex G-justify-between G-flex-wrap'>
                    <p>An intuitive website builder for non-coders </p>
                    <b>Drag-and-Drop</b>
                </div>
                <div className='L-how-it-work-child G-flex G-justify-between G-flex-wrap'>
                    <p>Fast and secure websites hosted on Google Cloud</p>
                    <b>Free Hosting</b>
                </div>
                <div className='L-how-it-work-child G-flex G-justify-between G-flex-wrap'>
                    <p>Tailored fit pricing for small and medium-sized brands</p>
                    <b>Affordable Pricing</b>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
