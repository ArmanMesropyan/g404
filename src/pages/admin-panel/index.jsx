import React from 'react';
import userPhoto from '../../assets/image/userPhoto.png'
import './style.scss'
import {NavLink} from "react-router-dom";
import image0 from '../../assets/image/img_web5.png'
import image1 from '../../assets/image/img_web1.png'
import image2 from '../../assets/image/img_web2.png'
import image3 from '../../assets/image/img_web3.png'
import image4 from '../../assets/image/img_web4.png'

const AdminPanel = () => {
    return (
        <div className='L-admin-panel '>
            <div className=' L-admin-panel-header G-flex G-justify-between'>
                <div className='L-admin-panel-header-child'><NavLink to='/home'>SPSE</NavLink></div>
                <div className='L-admin-panel-header-child G-flex G-align-center'>
                    <p><span className='icon-home-outline'/></p>
                    <p>My projects</p>
                    <div className='L-admin-panel-user-logo'
                         style={{backgroundImage: `url('${userPhoto}')`}}
                    />
                </div>
            </div>
            <div className='L-admin-panel-btn'>
                <button className='G-button-home L-home-admin-btn'>
                    Choose category
                </button>
            </div>
            <div className='L-admin-web-wrapper G-flex G-flex-wrap'>
                <NavLink to='/admin'>
                    <div
                        className='L-admin-web-image'
                        style={{backgroundImage: `url('${image0}')`}}
                    />
                </NavLink>

                <div
                    className='L-admin-web-image'
                    style={{backgroundImage: `url('${image1}')`}}
                />
                <div
                    className='L-admin-web-image'
                    style={{backgroundImage: `url('${image2}')`}}
                />
                <div
                    className='L-admin-web-image'
                    style={{backgroundImage: `url('${image3}')`}}
                />
                <div
                    className='L-admin-web-image'
                    style={{backgroundImage: `url('${image4}')`}}
                />
            </div>


        </div>
    );
};

export default AdminPanel;
