import React from 'react';
//import {NavLink} from 'react-router-dom';
import s from './NavFrieds.module.css';



const NavFrieds = () => {
    let friendData = friendsData.map(friend => <Friends img={friend.ava} name={friend.name} />)
    return (
        <div className={s.NavFrieds}>
            <p>Friends</p>
            <div>
                <Friends />
            </div>
        </div>
    );
};

export default NavFrieds;