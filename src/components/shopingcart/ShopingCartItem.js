import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext';

const ShopingCartItem = ({ item }) => {
    const { DescAmount, IncAmount } = useContext(CartContext)
    const [total, setTotal] = useState(0)
    useEffect(() => {
        setTotal(item.price * item.amount)

    }, [item.amount])

    return (
        <tr>
            <td class="shoping__cart__item">
                <img src={item.image} alt="" />
                <h5>{item.name}</h5>
            </td>
            <td class="shoping__cart__price">
                {item.price}
            </td>
            <td class="shoping__cart__quantity">
                <div class="quantity">
                    <div class="pro-qty">
                        <span class="dec qtybtn" onClick={() => DescAmount(item.id)}>-</span>
                        <input type="text" value={item.amount} />
                        <span class="inc qtybtn" onClick={() => IncAmount(item.id)}>+</span>
                    </div>
                </div>
            </td>
            <td class="shoping__cart__total">
                {total}
            </td>
            <td class="shoping__cart__item__close">
                <span class="icon_close"></span>
            </td>
        </tr>
    );
}

export default ShopingCartItem;
