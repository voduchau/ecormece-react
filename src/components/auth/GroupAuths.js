import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './GroupAuths.css'
import Modal from '@material-ui/core/Modal';
import Login from './Login';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const GroupAuths = ({ handleClosePopover }) => {

    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleClickLogin = () => {
        setOpen(true)
        // handleClosePopover(null)
    }
    const handleClose = () => {
        console.log('close handle')
        setOpen(false);
    };
    return (
        <div className="group-auths">
            <Button
                variant="contained"
                className="group-auths-btn btn-login"
                color="primary"
                disableElevation
                onClick={handleClickLogin}
            >
                Login
            </Button>
            <Button
                variant="contained"
                className="group-auths-btn btn-register"
                color="primary"
                disableElevation
            >
                Register
            </Button>
            <Button
                variant="contained"
                className="group-auths-btn"
                color="primary"
                disableElevation
            >
                Login Facebook
            </Button>

            {/* modal login */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                // disableEnforceFocus
            >
                <div style={modalStyle} className="body-modal-login">
                    <Login />
                </div>
            </Modal>
            {/* end */}

            {/* modal register */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                // disableEnforceFocus
            >
                <div style={modalStyle} className="body-modal-login">
                    <Login />
                </div>
            </Modal>
            {/* end */}
        </div>
    );
}

export default GroupAuths;
