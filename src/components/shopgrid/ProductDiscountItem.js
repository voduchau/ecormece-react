import React from 'react';
import pd1 from '../../images/product/discount/pd-1.jpg'
const ProductDiscountItem = () => {
    return (
        <div class="col-lg-4">
            <div class="product__discount__item">
                <div class="product__discount__item__pic set-bg"
                    data-setbg={pd1}
                    style={{ backgroundImage: `url(${pd1})` }}
                >
                    <div class="product__discount__percent">-20%</div>
                    <ul class="product__item__pic__hover">
                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div class="product__discount__item__text">
                    <span>Dried Fruit</span>
                    <h5><a href="#">Raisin’n’nuts</a></h5>
                    <div class="product__item__price">$30.00 <span>$36.00</span></div>
                </div>
            </div>
        </div>
    );
}

export default ProductDiscountItem;
