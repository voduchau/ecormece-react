import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const HeaderCart = () => {
    const { cartItem, ShowAlert, CloseAlert } = useContext(CartContext);

    // useEffect(()=>{
    //     setOpenAlert(true)
    //     console.log('vao settt')
    // },[cartItem.length])

    return (
        <div className="col-lg-3">
            <div className="header__cart">
                <ul>
                    <li><a href="/#"><i className="fa fa-heart"></i> <span>1</span></a></li>
                    <li>
                        <Link to="/shoping-cart">
                            <i className="fa fa-shopping-bag"></i> <span>{cartItem.length}</span>
                        </Link>
                    </li>
                </ul>
                <div className="header__cart__price">item: <span>$150.00</span></div>
            </div>
            <Collapse className="alertCart" in={ShowAlert}>
                <Alert
                    severity="success"
                    action={
                        <IconButton
                            aria-label="close"
                            color="green"
                            size="small"
                            onClick={() => {
                                CloseAlert(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }

                >Add to cart successfully! — check it out</Alert>
            </Collapse>
        </div>
    );
}

export default HeaderCart;
