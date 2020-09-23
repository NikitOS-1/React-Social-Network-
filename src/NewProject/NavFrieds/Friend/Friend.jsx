import React from 'react';
import s from './Friend.module.css';

const FriendOnly = (props) => {
    return(
        <div className={s.FriendOnly}>
            <img src="#" />
            {props.name}
        </div>
    )
}

const Friend = (props) => {
    let friendsElement = props.friendsData.friendsData.map( f => <FriendOnly name={f.name}/>)
    return (
        <div className={s.Friend}>
            <div>
                {friendsElement}
            </div>
        </div>
    );
};

export default Friend;