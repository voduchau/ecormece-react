import React, { useContext,useEffect,useState } from 'react';
// import Loadable from '@loadable/component';
import ProductDiscountItem from './ProductDiscountItem';
import OwlCarousel from 'react-owl-carousel';
import {GetItemContext} from '../../context/GetItemContext';
import {
    Link,
    useRouteMatch
} from "react-router-dom";

// const OwlCarousel = Loadable(() => import('react-owl-carousel'));

const ProductDiscount = () => {
    const {item} = useContext(GetItemContext)
    const [isMounted,setIsMounted] = useState(false)

    const renderProducts = () => {
        return item.products.map(item => {
            return item.saleof !== 0 ? <ProductDiscountItem Link={Link} key={item.productID} item={item}/> : null
        })
    }
    useEffect(()=>{
        setIsMounted(true)
    },[])
    return !isMounted ? null :
    (
        <div className="product__discount">
        <div className="section-title product__discount__title">
            <h2>Sale Off</h2>
        </div>
        <div className="row">
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
                    // navText={["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"]}
                >
                    {renderProducts()}
                </OwlCarousel>
        </div>
    </div>
    )
}

export default ProductDiscount;
