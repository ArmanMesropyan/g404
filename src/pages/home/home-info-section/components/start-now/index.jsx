import React from 'react';
import './style.scss'
import {NavLink} from "react-router-dom";

const StartNow = () => {
    return (
        <div className='L-start-now'>
            <h5>Customize Any Website<p>We give you the freedom to create any website you want.</p></h5>
            <div className='L-start-btn-block'>
                <NavLink to='/adminHome'>
                    <button className='G-button-home L-start-btn'>
                        Start Now
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default StartNow;
