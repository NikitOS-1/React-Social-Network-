import React from 'react';
//import {NavLink} from 'react-router-dom';
import s from './NavFrieds.module.css';
import Friend from './Friend/Friend';


const NavFrieds = (props) => {
debugger;
    let Friends = props.friendsData.map( f => {<Friend name={f.name} />});
    return (
        <div className={s.NavFrieds}>
            <p>Friends</p>
            <div>
                {Friends}
            </div>
        </div>
    );
};

export default NavFrieds;