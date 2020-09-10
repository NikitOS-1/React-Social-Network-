import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = (props) => {
    return (
        <div className={s.Profile}>
            <Posts PostData={props.PostData} />
        </div>
    );
};

export default Profile;