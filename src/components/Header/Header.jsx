import React from 'react';
import user from '../../images/user.png'
import "./Header.scss"
const Header = () => {
    return (
        <div className="header">
                <div className="logo">Movie App</div>
                <div className="user-logo">
                    <img src={user} alt="user-logo" />
                </div>
        </div>
    );
};

export default Header;
