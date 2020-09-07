import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';

const CheckoutOrderProducts = () => {
    const { cartItem } = useContext(CartContext)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let temp = 0;
        for (let i = 0; i < cartItem.length; i++) {
            temp += cartItem[i].price * cartItem[i].amount
        }
        setTotal(temp)
        return () => {
            setTotal(0)
        }
    }, [cartItem])
    const renderProducts = () => {
        return cartItem.map(item => {
            return <li key={item.id}>{item.name}<span>${item.price * item.amount}</span></li>
        })
    }

    return (
        <>
            <h4>Your Order</h4>
            <div className="checkout__order__products">Products <span>Total</span></div>
            <ul>
                {
                    renderProducts()
                }
            </ul>
            <div className="checkout__order__subtotal">Subtotal <span>${total}</span></div>
            <div className="checkout__order__total">Total <span>${total}</span></div>
        </>
    );
}

export default CheckoutOrderProducts;
