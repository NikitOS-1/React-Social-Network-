import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './Header/Header.jsx';
import MyFriends from './MyFriends/MyFriends';
import Navbar from './Navbar/Navbar.jsx';
import Profile from './Content/Profile/Profile';

const App = (props) => {
    return (
        <div className={s.App}>
            <Header />
            <Navbar />
            <MyFriends FriendPage={props.State.FriendPage} />
            <Route path = "/profile" to={<Profile />} />
        </div>
    );
};

export default App;