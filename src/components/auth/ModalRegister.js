import React, { useState } from 'react'
import Modal from '@material-ui/core/Modal';
import Register from './Register';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const ModalRegister = ({ openRegister, handleCloseRegister }) => {
    const [modalStyle] = useState(getModalStyle);
    return (
        <Modal
            open={openRegister}
            onClose={handleCloseRegister}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            disableEnforceFocus
        >
            <div style={modalStyle} className="body-modal-login">
                <Register handleCloseRegisterMd={handleCloseRegister}/>
            </div>
        </Modal>
    );
}

export default ModalRegister;
