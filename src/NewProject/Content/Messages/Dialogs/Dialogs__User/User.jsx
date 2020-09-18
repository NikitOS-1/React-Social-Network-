import React from 'react';
import { NavLink } from 'react-router-dom';
import { Route } from 'react-router-dom';
import s from './User.module.css';

const User = (props) => {
    let path = '/message/' + props.id;
    return (
        <div className={s.User}>
            <div className={s.UserLogo}><img src="#"/></div>
            <div className={s.UserName}><NavLink to={path}>{props.name}</NavLink></div>
        </div>
    )
};

export default User;