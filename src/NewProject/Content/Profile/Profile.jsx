import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';


const Profile = () => {
    return (
        <div className={s.Profile}>
            <Posts />
        </div>
    );
};

export default Profile;