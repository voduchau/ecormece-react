import React from 'react';
import product1 from '../../images/product/product-1.jpg'
import GroupIconCart from '../shared/GroupIconCart';
import { v4 as uuidv4 } from 'uuid';
import {
    Link,
    useRouteMatch
} from "react-router-dom";

const ProductFilterItem = ({ item }) => {
    return (
        <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="product__item">
                <div class="product__item__pic set-bg" data-setbg={product1} style={{ backgroundImage: `url(${item.img})` }}>
                    <ul class="product__item__pic__hover">
                        <GroupIconCart item={item} />
                    </ul>
                </div>
                <div class="product__item__text">
                    {/* <h6><Link to={`/shop-detail/${item.productID}`} params={{ item: item }}>{item.productName}</Link></h6> */}
                    <h6><Link to={{
                        pathname: `/shop-detail/${item.productID}`,
                        key: uuidv4(),
                        state: { item: item }
                    }}>{item.productName}</Link></h6>
                    <h5>${item.price}</h5>
                </div>
            </div>
        </div>
    );
}

export default ProductFilterItem;
