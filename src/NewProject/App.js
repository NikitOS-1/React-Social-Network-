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
            <MyFriends state_friendPage={props.state.friendPage} />

            <Route path="/profile" render={(() => <Profile state_profilePage={props.state.profilePage}
                dispatch={props.dispatch} />)} />

            <Route path="/messages" render={(() => <Messages state_messagesPage={props.state.messagesPage}
                dispatch={props.dispatch} />)} />
        </div>
    );
};

export default App;