import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './Header/Header.jsx';
import Navbar from './Navbar/Navbar.jsx';
import Profile from './Content/Profile/Profile.jsx';
import Message from './Content/Message/Message.jsx';
import News from './Content/News/News.jsx';
import Music from './Content/Music/Music.jsx';
import Set from './Content/Set/Set.jsx';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header />
                <Navbar />
                <div>
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/message' render={() => <Message />} />
                    <Route path='/news' render={() => <News />} />
                    <Route path='/music' render={() => <Music />} />
                    <Route path='/set' render={() => <Set />} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

