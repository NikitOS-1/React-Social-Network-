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
import logo from './Content/Profile/Posts/Post/logo512.png';


const App = (props) => {

    let PostData = [
        { id: 1, countLike: 14, img: { logo }, post: 'LKIOO' },
        { id: 2, countLike: 21, img: { logo }, post: 'Helloo' },
        { id: 3, countLike: 11, img: { logo }, post: 'Hoy Hey' },
        { id: 4, countLike: 14, img: { logo }, post: 'LKIOOa' },
        { id: 5, countLike: 14, img: { logo }, post: 'LKIOOa' },
        { id: 6, countLike: 14, img: { logo }, post: 'LKIOOra' },
        { id: 1, countLike: 14, img: { logo }, post: 'LKIOO' },
        { id: 2, countLike: 21, img: { logo }, post: 'Helloo' },
        { id: 3, countLike: 11, img: { logo }, post: 'Hoy Hey' },
        { id: 4, countLike: 14, img: { logo }, post: 'LKIOOa' },
        { id: 5, countLike: 14, img: { logo }, post: 'LKIOOa' },
        { id: 6, countLike: 14, img: { logo }, post: 'LKIOOra' }
    ];

    return (
        <BrowserRouter>
            <div className={s.App}>
                <Header />
                <Navbar />
                <div>
                    <Route path='/profile' render={() => <Profile PostData={PostData}/>} />
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

