import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useParams, useLocation, useHistory } from "react-router-dom";
import ImageDetails from './ImageDetails';
import ProductDetailTab from './ProductDetailTab';
import ProductRating from './ProductRating';
import { CartContext } from '../../context/CartContext';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const ShopDetailContent = (props) => {
    const { AddToCart } = useContext(CartContext);
    const [isActive, setIsActive] = useState([true, false, false])
    let { state } = useLocation();
    let history = useHistory();
    let params = useParams()


    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleClose = () => {
        setIsActive({ ...state, open: false });
    };

    const handleChangeTab = (tab) => {
        let temp = [false, false, false];
        temp[tab] = true;
        setIsActive(temp)
    }
    const handleAddToCart = (newState) => {
        AddToCart(state.item)
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    useEffect(() => {
        if (!state) {
            history.push('');
        }
    }, [state])

    return (
        <section className="product-details spad">
            <div className="container">
                <div className="row">
                    {state ? <ImageDetails item={state.item} /> : null}
                    <div className="col-lg-6 col-md-6">
                        <div className="product__details__text">
                            <h3>{state ? state.item.productName : null}</h3>
                            <ProductRating />
                            <div className="product__details__price">${state ? state.item.price : null}</div>
                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam
                            vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet
                            quam vehicula elementum sed sit amet dui. Proin eget tortor risus.</p>
                            <div className="product__details__quantity">
                                <div className="quantity">
                                    <div className="pro-qty">
                                        <input type="text" value="1" />
                                    </div>
                                </div>
                            </div>
                            <Button className="button-cart" variant="contained" color="primary" onClick={() => handleAddToCart()}>
                                ADD TO CART
                            </Button>
                            
                            <a href="/#" className="heart-icon"><i className="fa fa-heart" aria-hidden="true"></i></a>
                            <ul>
                                <li><b>Availability</b> <span>In Stock</span></li>
                                <li><b>Shipping</b> <span>01 day shipping. <samp>Free pickup today</samp></span></li>
                                <li><b>Weight</b> <span>0.5 kg</span></li>
                                <li><b>Share on</b>
                                    <div className="share">
                                        <a href="/#"><i className="fa fa-facebook"></i></a>
                                        <a href="/#"><i className="fa fa-twitter"></i></a>
                                        <a href="/#"><i className="fa fa-instagram"></i></a>
                                        <a href="/#"><i className="fa fa-pinterest"></i></a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ProductDetailTab item={state.item} isActive={isActive} handleChangeTab={handleChangeTab} />
                </div>
            </div>
        </section>
    );
}

export default ShopDetailContent;
