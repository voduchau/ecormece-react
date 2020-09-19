import React from 'react';
import product1 from '../../images/product/product-1.jpg'

const ProductFilterItem = () => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg={product1} style={{ backgroundImage: `url(${product1})` }}>
                    <ul class="product__item__pic__hover">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div class="product__item__text">
                    <h6><a href="#">Crab Pool Security</a></h6>
                    <h5>$30.00</h5>
                </div>
            </div>
        </div>
    );
}

export default ProductFilterItem;
