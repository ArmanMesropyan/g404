import React from 'react';
import './style.scss'
import noBack from '../../../../../assets/image/noBack.png'

const ColorsComponent = ({block, setBlock}) => {
    return (
        <div className='L-colors-block-wrapper'>
            <div className='L-colors'>
                <div className='L-color-black L-color'></div>
                <div className='L-color-white L-color'></div>
                <div className='L-color-noBack L-color'>
                    <div className='L-no-background' style={{
                        backgroundImage: `url('${noBack}')`
                    }}/>
                </div>
                <hr/>
                <div className='L-color-add L-color'>
                    <span className='icon-plus'/>
                </div>
                <div className='L-color-gray L-color'></div>
            </div>
        </div>
    );
};

export default ColorsComponent;
