import React from 'react';
import s from './Friend.module.css';

const FriendOnly = (props) => {
    return(
        <div>
            {props.name}
        </div>
    )
}

const Friend = (props) => {
    let friendsElement = props.friendsData.friendsData.map( f => <FriendOnly name={f.name}/>)
    return (
        <div className={s.Friend}>
            <p>Friend</p>
            <div>
                {friendsElement}
            </div>
        </div>
    );
};

export default Friend;