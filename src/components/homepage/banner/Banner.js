import React from 'react';
import BannerItem from './BannerItem';
import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <BannerItem img={banner1} />
                    <BannerItem img={banner2} />
                </div>
            </div>
        </div>
    );
}

export default Banner;
