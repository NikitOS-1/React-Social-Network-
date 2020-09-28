import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './Header/Header.jsx';
import MyFriends from './MyFriends/MyFriends';
import Navbar from './Navbar/Navbar.jsx';

const App = (props) => {
    return (
        <div className={s.App}>
            <Header />
            <Navbar />
            <MyFriends />
        </div>
    );
};

export default App;