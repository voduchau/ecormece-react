import React, { createContext, useReducer, useEffect, useState } from 'react';
import firebaseApp from '../firebase/firebaseApp';
// import uid from "uid";
export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItem, setCartItem] = useState([]);
    const AddToCart = (itemNew) => {
        const idItem = cartItem.findIndex(item => item.id === itemNew.productID);
        if (idItem != -1) {
            setCartItem([...cartItem, {id: itemNew.productID, name: itemNew.productName, price: itemNew.price, image: itemNew.img, amount: cartItem[idItem].amount++}]);
        }
        else {
            setCartItem([...cartItem, {id: itemNew.productID, name: itemNew.productName, price: itemNew.price, image: itemNew.img, amount: 1}]);
        }

    }
    return (
        <CartContext.Provider value={{ cartItem, AddToCart }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
