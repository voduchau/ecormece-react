import React, { Component } from 'react'

const ShopingCartItem = () => {
    return (
        <tr>
            <td class="shoping__cart__item">
                <img src="img/cart/cart-1.jpg" alt="" />
                <h5>Vegetable’s Package</h5>
            </td>
            <td class="shoping__cart__price">
                $55.00
                                    </td>
            <td class="shoping__cart__quantity">
                <div class="quantity">
                    <div class="pro-qty">
                        <input type="text" value="1" />
                    </div>
                </div>
            </td>
            <td class="shoping__cart__total">
                $110.00
                                    </td>
            <td class="shoping__cart__item__close">
                <span class="icon_close"></span>
            </td>
        </tr>
    );
}

export default ShopingCartItem;
