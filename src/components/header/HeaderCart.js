import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom";
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Login from '../auth/Login';
import GroupAuths from '../auth/GroupAuths';

const HeaderCart = () => {
    const { cartItem, ShowAlert, CloseAlert } = useContext(CartContext);

    // useEffect(()=>{
    //     setOpenAlert(true)
    //     console.log('vao settt')
    // },[cartItem.length])
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
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
                    <li>
                        <div className="popover-wraper">
                            <Button
                                aria-describedby={id}
                                variant="contained"
                                color="primary"
                                className="btn-login"
                                onMouseEnter={handleClick}
                            >
                                Đăng nhập
                            </Button>
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "center"
                                }}
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "center"
                                }}
                            >
                                <Typography className="popover-content">
                                    <GroupAuths handleClosePopover={handleClose} />
                                </Typography>
                            </Popover>
                        </div>
                    </li>
                </ul>
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
