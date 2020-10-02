import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const GroupIconCart = ({ item }) => {
    const { AddToCart } = useContext(CartContext)

    const HandleAddToCart = () => {
        AddToCart(item);
    }
    return (
        <>
            <li><a href="/#"><i className="fa fa-heart"></i></a></li>
            <li><a href="/#"><i className="fa fa-retweet"></i></a></li>
            <li><a className="add-to-cart-a"><i onClick={() => HandleAddToCart()} className="fa fa-shopping-cart"></i></a></li>
        </>
    );
}

export default GroupIconCart;
