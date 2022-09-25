import React from 'react'
import './style.scss'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className='L-header-wrapper'>
            <div className='L-header G-container'>
                <ul className='L-header-links G-flex G-justify-between G-align-center G-flex-wrap'>
                    <NavLink className='L-header-link' to='/home'>SPSE</NavLink>
                    <li className='L-header-link'>
                        <ul className='L-header-links-child G-flex'>
                            <NavLink to='/adminHome' className='L-header-link-child'>Templates</NavLink>
                            <li className='L-header-link-child'>Made with us</li>
                            <li className='L-header-link-child'>Pricing</li>
                        </ul>
                    </li>
                    <li className='L-header-link'>
                        <div className="L-header-icon">
                            <span className='icon-user'/>
                        </div>
                        <div>
                            <span> Log in</span> | <span>Sign up</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header