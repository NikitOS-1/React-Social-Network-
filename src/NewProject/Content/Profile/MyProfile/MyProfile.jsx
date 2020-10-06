import React from 'react';
import s from './MyProfile.module.css';
import Description from './Description/Description';

const MyProfile = () => {
    return (
        <div className={s.MyProfile}>
            <img src='#' alt="Your ava" />
            <Description />
        </div>
    )
};

export default MyProfile;