import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './NewProject/App';
import store from './Redux/State';

let rerenderEntireTree = (store) => {
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState.bind(store)} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>,
        document.getElementById('root')
    );
};

rerenderEntireTree(store);

store.subscribe(rerenderEntireTree);