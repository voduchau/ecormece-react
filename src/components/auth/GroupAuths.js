import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './GroupAuths.css'
// import Modal from '@material-ui/core/Modal';
// import Login from './Login';
import ModalLogin from './ModalLogin';
import ModalRegister from './ModalRegister';


// function getModalStyle() {
//     const top = 50;
//     const left = 50;

//     return {
//         top: `${top}%`,
//         left: `${left}%`,
//         transform: `translate(-${top}%, -${left}%)`,
//     };
// }

const GroupAuths = ({setPopover}) => {

    // const [modalStyle] = useState(getModalStyle);
    const [openLogin, setOpenLogin] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);

    const handleClickLogin = () => {
        setOpenLogin(true)
    }
    const handleCloseLogin = () => {
        setOpenLogin(false);
    };
    const handleClickRegister = () => {
        setOpenRegister(true)
    }
    const handleCloseRegister = () => {
        setOpenRegister(false);
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
                onClick={handleClickRegister}
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
            <ModalLogin setPopover={setPopover} openLogin={openLogin} handleCloseLogin={handleCloseLogin}  />
            <ModalRegister setPopover={setPopover} openRegister={openRegister} handleCloseRegister={handleCloseRegister} />
        </div>
    );
}

export default GroupAuths;
