import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './Header/Header.jsx';
import Navbar from './Navbar/Navbar.jsx';

const App = () => {
    return (
        <div className={s.App}>
            <Header />
            <Navbar />
        </div>
    );
};

export default App;