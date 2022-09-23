import React from 'react'
import './style.scss'
const HomeAbout = () => {
    return (
        <div className='L-home-about'>
            <h3>Discover what you can do with our builder</h3>
            <div className='L-home-about-btns-group G-flex G-flex-wrap '>
                <div className='L-home-about-btn'><button className='G-button-home L-about-button'>Menu Design</button></div>
                <div className='L-home-about-btn'><button className='G-button-home L-about-button'>Web-Design</button></div>
                <div className='L-home-about-btn'><button className='G-button-home L-about-button'>Mobile Design</button></div>
                <div className='L-home-about-btn'><button className='G-button-home L-about-button'>Your Bussines Control Work Space  </button></div>
                <div className='L-home-about-btn'><button className='G-button-home L-about-button'>Create Repository</button></div>
            </div>
        </div>
    )
}

export default HomeAbout