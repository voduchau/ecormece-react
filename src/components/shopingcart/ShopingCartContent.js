import React, { Component, useContext, useState, useEffect } from 'react'
import ShopingCartItem from './ShopingCartItem';
import { CartContext } from '../../context/CartContext';
import ShopingTotal from './ShopingTotal';

const ShopingCartContent = () => {
    const [total,setTotal] = useState(0)
    const { cartItem } = useContext(CartContext)

    useEffect(() => {
        let temp = 0;
        cartItem.map(item => {
            temp = temp + item.price*item.amount;
        })
        setTotal(temp)
    },[cartItem])
    
    return (
        <section class="shoping-cart spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="shoping__product">Products</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItem.map(item => {
                                            return <ShopingCartItem item={item} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="shoping__cart__btns">
                            <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                            <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                            Upadate Cart</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="shoping__continue">
                            <div class="shoping__discount">
                                <h5>Discount Codes</h5>
                                <form action="#">
                                    <input type="text" placeholder="Enter your coupon code" />
                                    <button type="submit" class="site-btn">APPLY COUPON</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ShopingTotal total={total} />
                </div>
            </div>
        </section>
    );
}

export default ShopingCartContent;
