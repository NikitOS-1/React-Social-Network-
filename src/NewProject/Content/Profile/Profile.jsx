import React from 'react';
import MyProfile from './MyProfile/MyProfile';
import Posts from './Posts/Posts';
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <MyProfile />
            <Posts state_profilePage={props.state_profilePage}
                dispatch={props.dispatch} />
        </div>
    )
};

export default Profile;