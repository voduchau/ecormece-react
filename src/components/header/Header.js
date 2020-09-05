import React from 'react';
import HeaderMenu from './HeaderMenu';
import HeaderCart from './HeaderCart';
import HeaderLogo from './HeaderLogo';

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <HeaderLogo />
                    <HeaderMenu />
                    <HeaderCart />
                </div>
                <div className="humberger__open">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        </div>
    );
}

export default Header;
