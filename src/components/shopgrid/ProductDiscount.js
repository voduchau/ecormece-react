import React, { useContext } from 'react';
import ProductDiscountItem from './ProductDiscountItem';
import OwlCarousel from 'react-owl-carousel';
import {GetItemContext} from '../../context/GetItemContext';


const ProductDiscount = () => {
    const {item} = useContext(GetItemContext)

    const renderProducts = () => {
        return item.products.map(item => {
            // if(item.saleof !== 0){
            //     return <ProductDiscountItem key={item.productID} item={item}/>
            // }
            return item.saleof !== 0 ? <ProductDiscountItem key={item.productID} item={item}/> : null
        })
    }
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
                        {renderProducts()}
                    </OwlCarousel>
            </div>
        </div>
    );
}

export default ProductDiscount;
