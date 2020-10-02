import React, { useState } from 'react';
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

const ModalLogin = ({ openLogin, handleCloseLogin }) => {
    const [modalStyle] = useState(getModalStyle);
    return (
        <Modal
            open={openLogin}
            onClose={handleCloseLogin}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        // disableEnforceFocus
        >
            <div style={modalStyle} className="body-modal-login">
                <Login />
            </div>
        </Modal>
    );
}

export default ModalLogin;
