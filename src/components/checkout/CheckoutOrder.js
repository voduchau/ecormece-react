import React, { useContext,useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import CheckoutOrderProducts from './CheckoutOrderProducts';


const CheckoutOrder = () => {
    const { cartItem } = useContext(CartContext)
    useEffect(() => {

    },[])

    return (
        <div className="col-lg-4 col-md-6">
            <div className="checkout__order">
                <CheckoutOrderProducts />
                <div className="checkout__input__checkbox">
                    <label>
                        Create an account?
                                        <input type="checkbox" id="acc-or" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                <div className="checkout__input__checkbox">
                    <label>
                        Check Payment
                                        <input type="checkbox" id="payment" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div className="checkout__input__checkbox">
                    <label>
                        Paypal
                                        <input type="checkbox" id="paypal" />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <button type="submit" className="site-btn">PLACE ORDER</button>
            </div>
        </div>
    );
}

export default CheckoutOrder;
