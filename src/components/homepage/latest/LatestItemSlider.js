import React from 'react';

const LatestItemSlider = ({ name, price, img }) => {
    return (
        <a href="/#" className="latest-product__item">
            <div className="latest-product__item__pic">
                <img src={img} alt="" />
            </div>
            <div className="latest-product__item__text">
                <h6>{name}</h6>
                <span>{price}</span>
            </div>
        </a>
    );
}

export default LatestItemSlider;
