import React from 'react';
import pd1 from '../../images/product/discount/pd-1.jpg'
import GroupIconCart from '../shared/GroupIconCart';

const ProductDiscountItem = ({ item }) => {
    return (
        <div className="col-lg-4">
            <div className="product__discount__item">
                <div className="product__discount__item__pic set-bg"
                    data-setbg={pd1}
                    style={{ backgroundImage: `url(${item.img})` }}
                >
                    <div className="product__discount__percent">-{item.saleof}%</div>
                    <ul className="product__item__pic__hover">
                        <GroupIconCart item={item} />
                    </ul>
                </div>
                <div className="product__discount__item__text">
                    <span>Dried Fruit</span>
                    <h5><a href="/#">{item.productName}</a></h5>
                    <div className="product__item__price">${(item.price - (item.price * item.saleof) / 100)} <span>${item.price}</span></div>
                </div>
            </div>
        </div>
    );
}

export default ProductDiscountItem;
