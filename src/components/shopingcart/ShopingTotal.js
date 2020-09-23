import React from 'react';
import {
    Link
} from "react-router-dom";

const ShopingTotal = ({ total }) => {
    return (
        <div class="col-lg-6">
            <div class="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                    <li>Subtotal <span>${total}</span></li>
                    <li>Total <span>${total}</span></li>
                </ul>
                <Link to="/checkout" class="primary-btn">PROCEED TO CHECKOUT</Link>
            </div>
        </div>
    );
}

export default ShopingTotal;
