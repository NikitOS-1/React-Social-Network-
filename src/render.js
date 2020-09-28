import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './NewProject/App';

export let rerenderEntireTree = (State) => {
  ReactDOM.render(
    <BrowserRouter>
      <App State={State} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};