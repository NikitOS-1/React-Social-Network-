import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <Posts PostData={props.PostData} 
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;