import React from 'react';
import FeatureItem from '../homepage/features/FeatureItem';
import ProductDiscountItem from './ProductDiscountItem';
import OwlCarousel from 'react-owl-carousel';

const ProductDiscount = () => {
    return (
        <div class="product__discount">
            <div class="section-title product__discount__title">
                <h2>Sale Off</h2>
            </div>
            <div class="row">
                {/* <div class="product__discount__slider owl-carousel"> */}
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        margin={20}
                        autoHeightClass
                        responsiveClass={true}
                        item={4}
                        stagePadding={0}
                        mergeFit={true}
                        center={true}
                        nav={false}
                        autoplayHoverPause={true}
                        autoplay={true}
                        autoplayTimeout={2500}
                        smartSpeed={1200}
                        animateOut='fadeOut'
                        animateIn='fadeIn'
                        navText={["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"]}
                    >
                        <ProductDiscountItem />
                        <ProductDiscountItem />
                    </OwlCarousel>
            </div>
        </div>
    );
}

export default ProductDiscount;
