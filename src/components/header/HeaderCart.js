import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../../context/CartContext';
import { AuthContext } from '../../context/AuthContext';
import { Link } from "react-router-dom";
import './Header.css'
// import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from '@material-ui/icons/Person';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import GroupAuths from '../auth/GroupAuths';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Profile from './Profile';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: 'yellow',
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: 'black',
            },
        },
    },
}))(MenuItem);
const HeaderCart = () => {
    const classes = useStyles();
    const { user } = useContext(AuthContext)
    const { cartItem, ShowAlert, CloseAlert } = useContext(CartContext);
    const [openSnackBar, setOpenSnackBar] = useState(false);
    // useEffect(()=>{
    //     setOpenAlert(true)
    //     console.log('vao settt')
    // },[cartItem.length])
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElProfile, setAnchorElProfile] = React.useState(null);

    useEffect(() => {

    }, [])

    const handleClickSnackBar = () => {
        setOpenSnackBar(true);
    };

    const handleCloseSnackBar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackBar(false);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickProfile = (event) => {
        setAnchorElProfile(event.currentTarget);
    };

    const handleCloseProfile = () => {
        setAnchorElProfile(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;
    const openProfile = Boolean(anchorElProfile);
    const idProfile = openProfile ? 'simple-popover' : undefined;
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
                            {
                                user ?
                                    <IconButton
                                        aria-controls="customized-menu"
                                        aria-haspopup="true"
                                        aria-describedby={idProfile}
                                        variant="contained"
                                        color="primary"
                                        className="btn-profile"
                                        onClick={handleClickProfile}
                                    >
                                        <PersonIcon style={{ fontSize: 30 }} />
                                    </IconButton> :
                                    <Button
                                        aria-describedby={id}
                                        variant="contained"
                                        color="primary"
                                        className="btn-login"
                                        onMouseEnter={handleClick}
                                    >
                                        Đăng nhập
                                    </Button>
                            }
                            {/* Popover login, register */}
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                // onMouseLeave={handleClose}
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
                                    <GroupAuths handleClickSnackBar={handleClickSnackBar} setPopover={setAnchorEl} handleClosePopover={handleClose} />
                                </Typography>
                            </Popover>

                            {/* Popover log out, setting  */}
                            <Profile setAnchorElProfile={setAnchorElProfile} anchorElProfile={anchorElProfile} handleCloseProfile={handleCloseProfile} />
                        </div>
                    </li>
                    <Button
                        aria-describedby={id}
                        variant="contained"
                        color="primary"
                        className="btn-login-hide"
                        onMouseEnter={handleClick}
                        disabled
                    >
                        Login
                    </Button>
                </ul>
            </div>
            <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleCloseSnackBar}>
                <Alert onClose={handleCloseSnackBar} severity="success">
                    Login successfully!
                </Alert>
            </Snackbar>
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
