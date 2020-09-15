import React from 'react';
import s from './NavFrieds.module.css';
import Friend from './Friend/Friend';

const NavFrieds = (props) => {
    return (
        <div className={s.NavFrieds}>
            <p>Friends</p>
            <div>
                <Friend friendsData={props.friendsData} />
            </div>
        </div>
    );
};

export default NavFrieds;