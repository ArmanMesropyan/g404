import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
import image1 from '../../../assets/image/1.png'
import image2 from '../../../assets/image/2.png'
import icon from '../../../assets/image/icon/Group404.png'
import {SampleNextArrow, SamplePrevArrow} from "./utils";

const HomeAside = () => {


    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        dots: true,
        appendDots: dots => <ul className='L-slider-dots'>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom G-flex">
                <p> {'0' + (i + 1)} </p>
                <p>/03</p>
            </div>
        )
    };
    return (
        <div className="L-home-container">
            <Slider {...settings}>
                <div>
                    <div className='L-slider-content G-flex'>
                        <div className='L-slider-content-child'>
                            <h6 className='L-slider-title'>Customize your web page with available 80+ component</h6>
                            <div className='L-slider-about G-flex G-align-center'><p>Header </p><img src={icon}
                                                                                                     alt="icon"/>
                            </div>
                            <div className="L-slider-desc">
                                <p>Header is the top section of the web page. And this is the most importanar part of
                                    web page</p>
                            </div>
                        </div>
                        <div className='L-slider-content-child'>
                            <div className='L-slider-image'
                                 style={{
                                     backgroundImage: `url('${image1}')`
                                 }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='L-slider-content G-flex'>
                        <div className='L-slider-content-child'>
                            <h6 className='L-slider-title'>Customize your web page with available 80+ component</h6>
                            <div className='L-slider-about G-flex G-align-center'><p>Footer </p><img src={icon}
                                                                                                     alt="icon"/>
                            </div>
                            <div className="L-slider-desc">
                                <p>footer is an area at the bottom of a document page containing data common to other
                                    pages.</p>
                            </div>
                        </div>
                        <div className='L-slider-content-child'>
                            <div className='L-slider-image'
                                 style={{
                                     backgroundImage: `url('${image2}')`
                                 }}
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='L-slider-content G-flex'>
                        <div className='L-slider-content-child'>
                            <h6 className='L-slider-title'>Customize your web page with available 80+ component</h6>
                            <div className='L-slider-about G-flex G-align-center'><p>Header </p><img src={icon}
                                                                                                     alt="icon"/>
                            </div>
                            <div className="L-slider-desc">
                                <p>Header is the top section of the web page. And this is the most importanar part of
                                    web page</p>
                            </div>
                        </div>
                        <div className='L-slider-content-child'>
                            <div className='L-slider-image'
                                 style={{
                                     backgroundImage: `url('${image1}')`
                                 }}
                            />
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default HomeAside