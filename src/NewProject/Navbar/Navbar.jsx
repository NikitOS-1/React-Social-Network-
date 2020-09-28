import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeNav}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/message' activeClassName={s.activeNav}>Messages</NavLink>
            </div>
        </div>
    );
};

export default Navbar;