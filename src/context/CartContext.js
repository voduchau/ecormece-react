import React, { createContext, useReducer, useEffect, useState } from 'react';
import firebaseApp from '../firebase/firebaseApp';
export const CartContext = createContext();

const CartProvider = (props) => {
    const [cartItem, setCartItem] = useState([]);

    useEffect(() => {
        if(localStorage.getItem("cartItem") != null){
            setCartItem(JSON.parse(localStorage.getItem("cartItem")))
        }
    },[])

    const AddToCart = (itemNew) => {
        const idItem = cartItem.findIndex(item => item.id === itemNew.productID);
        if (idItem != -1) {
            const temp = cartItem;
            temp[idItem].amount +=1
            setCartItem(temp)
            // console.log(cartItem,'item sau khi update')
            // setCartItem([...cartItem, {id: itemNew.productID, name: itemNew.productName, price: itemNew.price, image: itemNew.img, amount: cartItem[idItem].amount++}]);
        }
        else {
            localStorage.setItem('cartItem',JSON.stringify([...cartItem, {id: itemNew.productID, name: itemNew.productName, price: itemNew.price, image: itemNew.img, amount: 1}]));
            setCartItem([...cartItem, {id: itemNew.productID, name: itemNew.productName, price: itemNew.price, image: itemNew.img, amount: 1}]);
        }
    }
    
    const DescAmount = (id) => {
        const idItem = cartItem.findIndex(item => item.id === id);
        const temp = [...cartItem]
        temp[idItem].amount -= 1
        if(temp[idItem].amount <= 0) {
            temp.splice(idItem, 1);
        }
        localStorage.setItem('cartItem',JSON.stringify(temp))
        setCartItem(temp)
    }
    const IncAmount = (id) => {
        const idItem = cartItem.findIndex(item => item.id === id);
        const temp = [...cartItem]
        temp[idItem].amount += 1
        localStorage.setItem('cartItem',JSON.stringify(temp))
        setCartItem(temp)
    }
    return (
        <CartContext.Provider value={{ cartItem, AddToCart,DescAmount, IncAmount  }}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider;
