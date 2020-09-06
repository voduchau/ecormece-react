import React, { Component } from 'react';

const ShopingTotal = ({ total }) => {
    return (
        <div class="col-lg-6">
            <div class="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                    <li>Subtotal <span>${total}</span></li>
                    <li>Total <span>${total}</span></li>
                </ul>
                <a href="#" class="primary-btn">PROCEED TO CHECKOUT</a>
            </div>
        </div>
    );
}

export default ShopingTotal;
