import React from 'react';
import {NavLink} from 'react-router-dom';

import ProfileDropout from '../ProfileDropoutComp/ProfileDropout';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="header-container">
                    <NavLink to='/' className="header-title">{props.headerTitle}</NavLink>
                    <ProfileDropout />       
            </div>
        </header>
    )
}

export default Header;
