import React from 'react';
import product1 from '../../images/product/product-1.jpg'
import GroupIconCart from '../shared/GroupIconCart';

const ProductFilterItem = ({ item }) => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg={product1} style={{ backgroundImage: `url(${item.img})` }}>
                    <ul class="product__item__pic__hover">
                        {/* <li><a href="/#"><i class="fa fa-heart"></i></a></li>
                        <li><a href="/#"><i class="fa fa-retweet"></i></a></li>
                        <li><a href="/#"><i class="fa fa-shopping-cart"></i></a></li> */}
                        <GroupIconCart item={item} />
                    </ul>
                </div>
                <div class="product__item__text">
                    <h6><a href="/#">{item.productName}</a></h6>
                    <h5>${item.price}</h5>
                </div>
            </div>
        </div>
    );
}

export default ProductFilterItem;
