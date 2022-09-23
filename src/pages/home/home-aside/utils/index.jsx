import React from "react";

export function SampleNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        <span
            className={'icon-arrow-right-circle L-arrow-slider-next'}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}

export function SamplePrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        <span
            className={'icon-arrow-left-circle L-arrow-slider-prev'}
            style={{...style, display: "block"}}
            onClick={onClick}
        />
    );
}