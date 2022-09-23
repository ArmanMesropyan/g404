import React from 'react';
import './style.scss'

const Footer = () => {
    return (
        <div className='L-footer'>
            <div className='G-container'>
                <div className='L-footer-content G-flex G-justify-between G-flex-wrap'>
                    <h5>
                        Build and use tamplates for your web site
                    </h5>
                    <div className='L-footer-content-child G-flex G-flex-wrap'>
                        <div className='L-footer-content-pre-child'><p>News</p></div>
                        <div className='L-footer-content-pre-child'><p>Contact us</p></div>
                        <div className='L-footer-content-pre-child'><p>Privecy</p></div>
                        <div className='L-footer-content-pre-child'><p>Templates</p></div>
                        <div className='L-footer-content-pre-child'><p>Made with us</p></div>
                        <div className='L-footer-content-pre-child'><p>Pricing</p></div>
                    </div>
                </div>
                <div className="L-footer-info G-flex G-justify-between G-flex-wrap">
                    <b>SPSE</b>
                    <p>By signing up you are agreeing to get mails and ubdates. You may unsubscribe at any time.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
