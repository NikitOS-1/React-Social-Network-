import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import Header from './Header/Header.jsx';
import Navbar from './Navbar/Navbar.jsx';
// import Profile from './Content/Profile/Profile.jsx';
// import Messages from './Content/Messages/Messages.jsx';
// import News from './Content/News/News.jsx';
// import Music from './Content/Music/Music.jsx';
// import Set from './Content/Set/Set.jsx';
import NavFrieds from './NavFrieds/NavFrieds'

const App = (props) => {
    return (
        <div className={s.App}>
            <Header />
            <Navbar />
            <NavFrieds friendsData={props.State.FriendPage} />
            {/* <div className={s.Content}>
                <Route path='/profile' />
                <Route path='/message' />
            </div> */}
        </div>
    );
};

export default App;