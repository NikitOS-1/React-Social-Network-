import React from 'react';
import MyProfile from './MyProfile/MyProfile';
import Posts from './Posts/Posts';
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div className={s.Profile}>
            <MyProfile />
            <Posts />
        </div>
    )
};

export default Profile;