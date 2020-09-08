import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={s.Navbar}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeNav}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/message' activeClassName={s.activeNav}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeNav}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeNav}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/set' activeClassName={s.activeNav}>Setting</NavLink>
            </div>
        </div>
    );
};

export default Navbar;