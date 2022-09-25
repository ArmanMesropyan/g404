import React, {useEffect, useState} from 'react';
import './style.scss'
import background from '../../../assets/image/adminBackground.png'
import logo from '../../../assets/image/travelLogo.png'
import AdminSidebar from "../admin-sidebar";
import {NavLink} from "react-router-dom";

const AdminHomePage = () => {
    return (
        <div className='L-admin-home-page G-flex'>
            <div className='L-admin-home-child'>
                <AdminSidebar/>
            </div>
            <div className='L-admin-home-child' style={{
                backgroundImage: `url('${background}')`
            }}>
                <div className='L-admin-home-wrapper G-container'>
                    <div className='L-admin-home-header G-flex G-justify-between G-align-center G-flex-wrap'>
                        <div className='L-admin-home-header-links L-admin-home-logo'
                             style={{backgroundImage: `url('${logo}')`}}
                        />
                        <div className='L-admin-home-header-links'>
                            <ul className='L-admin-home-header-list G-flex'>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Packages</li>
                            </ul>
                        </div>
                        <div className='L-admin-home-header-links G-flex'>
                            <span className='icon-star'/>
                            <span className='icon-user-circle-o'/>

                        </div>
                    </div>
                    <div className="L-admin-home-content">
                        <h1>Your Imagination Is Your Only Limit</h1>
                        <p>We always try to make our customer Happy. We provide all kind of facilities. Your
                            Satisfaction is our main priority</p>
                        <button className='L-admin-btn'>Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHomePage;

