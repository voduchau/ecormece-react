import React from 'react';
import logo from '../../images/logo.png';

const HeaderLogo = () => {
    return (
        <div className="col-lg-3">
            <div className="header__logo">
                <a href="./index.html"><img src={logo} alt="" /></a>
            </div>
        </div>
    );
}

export default HeaderLogo;
