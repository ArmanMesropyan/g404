import React from 'react';
import './style.scss'
import L1 from '../../../../../assets/image/links/link1.png'
import L2 from '../../../../../assets/image/links/link2.png'
import L3 from '../../../../../assets/image/links/link3.png'
import L4 from '../../../../../assets/image/links/link4.png'
import L5 from '../../../../../assets/image/links/link5.png'
import L6 from '../../../../../assets/image/links/link6.png'
import L7 from '../../../../../assets/image/links/link7.png'
import L8 from '../../../../../assets/image/links/link8.png'
import L9 from '../../../../../assets/image/links/link9.png'
import L10 from '../../../../../assets/image/links/link10.png'
import L11 from '../../../../../assets/image/links/link11.png'

const ElementsComponent = ({block,setBlock}) => {
    return (
        <div className='L-element-block-wrapper'>
            <div className='L-element-block-input'>
                <input type="text" placeholder='All'/>
                <span className='icon-cheveron-down'/>
            </div>
            <div className='L-element-title-title'>
                <p>ELEMENTS</p>
            </div>
            <div className='L-elements-links-wrapper G-flex G-flex-wrap'>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L1} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L2} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L3} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L4} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L5} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L6} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L7} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L8} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L9} alt='image'/>
                </div>
            </div>
            <div className='L-element-title-title'>
                <p>NAVIGATION</p>
            </div>
            <div className='L-elements-links-wrapper G-flex G-flex-wrap'>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L10} alt='image'/>
                </div>
                <div className='L-link-wrapper'>
                    <img className='L-element-link-image'
                         src={L11} alt='image'/>
                </div>
            </div>

        </div>
    );
};

export default ElementsComponent;
