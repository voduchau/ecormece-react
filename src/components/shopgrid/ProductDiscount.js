import React from 'react';
import FeatureItem from '../homepage/features/FeatureItem';
import ProductDiscountItem from './ProductDiscountItem';

const ProductDiscount = () => {
    return (
        <div class="product__discount">
            <div class="section-title product__discount__title">
                <h2>Sale Off</h2>
            </div>
            <div class="row">
                <div class="product__discount__slider owl-carousel">
                    <ProductDiscountItem />
                    <ProductDiscountItem />
                    <ProductDiscountItem />
                    <ProductDiscountItem />
                </div>
            </div>
        </div>
    );
}

export default ProductDiscount;
