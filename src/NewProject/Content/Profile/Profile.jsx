import React from 'react';
import MyProfile from './MyProfile/MyProfile';
import Posts from './Posts/Posts';
import s from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <MyProfile />
            <Posts updateText_AddPost={props.updateText_AddPost}
                clicks_AddPost={props.clicks_AddPost} 
                state_postData={props.state} />
        </div>
    )
};

export default Profile;