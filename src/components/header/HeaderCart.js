import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const HeaderCart = () => {
    const { cartItem } = useContext(CartContext);

    return (
        <div className="col-lg-3">
            <div className="header__cart">
                <ul>
                    <li><a href="/#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                    <li>
                        <Link to="/shoping-cart">
                            <i className="fa fa-shopping-bag"></i> <span>3</span>
                        </Link>
                    </li>
                </ul>
                <div className="header__cart__price">item: <span>$150.00</span></div>
            </div>
        </div>
    );
}

export default HeaderCart;
