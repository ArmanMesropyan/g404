import React from 'react';
import block1 from '../../../../../assets/image/block1.png'
import block2 from '../../../../../assets/image/block2.png'
import block3 from '../../../../../assets/image/block3.png'
import block4 from '../../../../../assets/image/block4.png'
import './style.scss'

const BlocksComponent = ({block , setBlock}) => {
    return (
        <div className='L-sidebar-block-wrapper'>

            <div className='L-sidebar-block-input'>
                <input type="text" placeholder='All'/>
                <span className='icon-cheveron-down'/>
            </div>
            <div className='L-block-title-title'>
                <p>BLOCKS</p>
            </div>

            <div className='L-blocks-content'>
                <p>Home</p>
                <div className='L-block-child' style={{backgroundImage: `url('${block1}')`}}/>
                <div className='L-block-child' style={{backgroundImage: `url('${block2}')`}}/>
                <div className='L-block-child' style={{backgroundImage: `url('${block3}')`}}/>
                <div className='L-block-arrows'>
                    <span className='icon-chevron-thin-left'/>
                    <span className='icon-chevron-thin-right'/>
                </div>
                <p>About</p>
                <div className='L-block-child' style={{backgroundImage: `url('${block4}')`}}/>
            </div>
        </div>
    );
};

export default BlocksComponent;
