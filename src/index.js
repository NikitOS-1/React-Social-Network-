import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './NewProject/App';
import { updateText_AddPost, clicks_AddPost, subscribe } from './Redux/State';
import State from './Redux/State';

let rerenderEntireTree = (State) => {
    ReactDOM.render(
        <BrowserRouter>
            <App State={State} updateText_AddPost={updateText_AddPost}
                clicks_AddPost={clicks_AddPost} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(State);

subscribe(rerenderEntireTree);