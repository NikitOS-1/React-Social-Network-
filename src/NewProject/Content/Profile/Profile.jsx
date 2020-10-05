import React from 'react';
import MyProfile from './MyProfile/MyProfile';
import Posts from './Posts/Posts';
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <MyProfile />
            <Posts dispatch={props.dispatch}
                state={props.state} />
        </div>
    )
};

export default Profile;