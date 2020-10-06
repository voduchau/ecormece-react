import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import user1 from '../../images/user1.jpg'
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Header.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import { AuthContext } from '../../context/AuthContext';
import FaceIcon from '@material-ui/icons/Face';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { useHistory } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        className="menu-setting"
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



const Profile = ({ setAnchorElProfile, anchorElProfile, handleCloseProfile }) => {
    const { handleLogOut, user } = useContext(AuthContext)
    let history = useHistory();
    const handleClickLogOut = () => {
        setAnchorElProfile(null)
        handleLogOut()
    }

    const GoToDashBoard = () => {
        history.push('/dashboard')
    }

    return (
        <div className="profile-setting">
            <StyledMenu
                className="list-profile"
                id="customized-menu"
                anchorEl={anchorElProfile}
                keepMounted
                open={Boolean(anchorElProfile)}
                onClose={handleCloseProfile}
            >
                <StyledBadge
                    className="avatar-user"
                    overlap="circle"
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    variant="dot"
                >
                    <Avatar alt="Remy Sharp" src={user1} />
                </StyledBadge>
                <StyledMenuItem>
                    <ListItemIcon>
                        <FaceIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={user ? user.email : 'email user'} />
                </StyledMenuItem>
                <StyledMenuItem>
                    <ListItemIcon>
                        <VpnKeyIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Change password" />
                </StyledMenuItem>

                <StyledMenuItem onClick={()=>GoToDashBoard()}>
                    <ListItemIcon>
                        <DashboardIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Go to Dashboard" />
                </StyledMenuItem>

                <StyledMenuItem onClick={()=>handleClickLogOut()}>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Log out" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    );
}

export default Profile;
