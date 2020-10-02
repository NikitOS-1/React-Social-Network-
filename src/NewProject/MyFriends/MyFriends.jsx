import React from 'react';
import MyFriend from './MyFriend/MyFriend';
import s from './MyFriends.module.css';

const MyFriends = (props) => {
    let myFriend = props.friendPage.user.map(u => <MyFriend id={u.id} name={u.name} />);
    return (
        <div className={s.MyFriends}>
            {myFriend}
        </div>
    )
};

export default MyFriends;