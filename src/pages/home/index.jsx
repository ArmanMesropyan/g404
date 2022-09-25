import React from 'react'
import './style.scss'
import background from '../../assets/image/image.png'
import HomeAbout from './home-about'
import HomeAside from './home-aside/index';
import HomeInfoSection from "./home-info-section";
import Header from "../header";
import Footer from "../footer";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header/>
            <div className='L-home-page'>
                <div className='G-container'>
                    <div className='L-title-block'>
                        <h1 className='L-home-page-title'>Create Your Web Site With <span>SPSE Builder</span></h1>
                        <div className='L-home-btn-block'>
                            <NavLink to='/adminHome'>
                            <button className='G-button-home L-home-btn'>
                                    Start Now
                            </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className='L-home-page-background-wrapper'>
                    <div className='L-home-page-background'
                         style={{backgroundImage: `url('${background}')`}}/>
                </div>
                <div className='G-container'>
                    <HomeAbout/>
                    <HomeAside/>
                </div>

            </div>
            <HomeInfoSection/>
            <Footer/>

        </>
    )
}

export default Home