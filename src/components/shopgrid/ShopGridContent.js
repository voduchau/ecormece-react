import React from 'react';
import FilterItem from './FilterItem';
import ProductDiscount from './ProductDiscount';
import ProductFilter from './ProductFilter';
import Sidebar from './Sidebar';

const ShopGridContent = () => {
    return (
        <section class="product spad">
            <div class="container">
                <div class="row">
                    <Sidebar />
                    <div class="col-lg-9 col-md-7">
                        <ProductDiscount />
                        <FilterItem />
                        <ProductFilter />
                        <div class="product__pagination">
                            <a href="#">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ShopGridContent;
