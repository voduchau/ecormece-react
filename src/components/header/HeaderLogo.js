import React from 'react';
import logo from '../../images/logo.png';
import {
    Link
  } from "react-router-dom";
const HeaderLogo = () => {
    return (
        <div className="col-lg-3">
            <div className="header__logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
        </div>
    );
}

export default HeaderLogo;
