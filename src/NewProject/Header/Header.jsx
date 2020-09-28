import React from 'react';
import s from './Header.module.css';
import logo from './icon.png';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className={s.Header}>
            <NavLink to = "/profile" activeClassName={s.activeNav} className={s.item}> <img src={logo} alt="logo"/></NavLink>
            <h1>React JS</h1>
        </div>
    );
};

export default Header;