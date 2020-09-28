import React from 'react';
import s from './MyFriend.module.css';
import avatar from './icon.png';

const MyFriend = (props) => {
    return (
        <div className={s.MyFriend}>
                <img src={avatar} alt="This your avatar"/>
                {props.name}
        </div>
    )
};

export default MyFriend;