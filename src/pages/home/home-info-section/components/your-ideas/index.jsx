import React from 'react';
import './style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SampleNextArrow, SamplePrevArrow} from "../../../home-aside/utils";
import image from '../../../../../assets/image/​ HPEliteDragonfly.png'
const YourIdeas = () => {
    const settings = {
        dots: true,
        appendDots: dots => <ul className='L-slider-dots'>{dots}</ul>,
        customPaging: i => (
            <div className="ft-slick__dots--custom G-flex">
                <p> { '0' +(i + 1)} </p>
                <p>/03</p>
            </div>
        ),
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        speed: 500,
        centerPadding: '260px',
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                }
            }]

    };
    return (
        <div className='L-your-ideas'>
            <h5>Transport Your Ideas Into The Digital World With <span>SPSE</span></h5>
            <div className='L-your-ideas-slider'>
                <Slider {...settings}>
                    <div>
                        <div className='L-your-ideas-image-background'><img src={image} alt="image-slider"/></div>
                    </div>
                    <div>
                        <div className='L-your-ideas-image-background'><img src={image} alt="image-slider"/></div>
                    </div>
                    <div>
                        <div className='L-your-ideas-image-background'><img src={image} alt="image-slider"/></div>
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default YourIdeas;
