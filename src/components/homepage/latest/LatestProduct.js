import React from 'react';
import LatestItemSlider from './LatestItemSlider'
import lp1 from '../../../images/latest-product/lp-1.jpg';
import lp2 from '../../../images/latest-product/lp-2.jpg';
import lp3 from '../../../images/latest-product/lp-3.jpg';

const LatestProduct = ({ title, name, price }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
                <h4>{title}</h4>
                <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                        <LatestItemSlider name={name} price={price} img={lp1} />
                        <LatestItemSlider name={name} price={price} img={lp2} />
                        <LatestItemSlider name={name} price={price} img={lp3} />
                    </div>
                    <div className="latest-prdouct__slider__item">
                        <LatestItemSlider name={name} price={price} img={lp1} />
                        <LatestItemSlider name={name} price={price} img={lp2} />
                        <LatestItemSlider name={name} price={price} img={lp3} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatestProduct;
