import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './Header/Header.jsx';
import MyFriends from './MyFriends/MyFriends';
import Navbar from './Navbar/Navbar.jsx';
import Profile from './Content/Profile/Profile';
import Messages from './Content/Messages/Messages';

const App = (props) => {
    return (
        <div className={s.App}>
            <Header />
            <Navbar />
            <MyFriends FriendPage={props.State.FriendPage} />

            <Route path="/profile" render={(() => <Profile updateText_AddPost={props.updateText_AddPost}
                clicks_AddPost={props.clicks_AddPost} 
                State={props.State.ProfilePage} />)} />
            <Route path="/messages" render={(() => <Messages />)} />
        </div>
    );
};

export default App;