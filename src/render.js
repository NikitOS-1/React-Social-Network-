import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './NewProject/App';
import { updateText_AddPost, clicks_AddPost } from './Redux/State';
import State from './Redux/State';

export let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App State={State} updateText_AddPost={updateText_AddPost}
        clicks_AddPost={clicks_AddPost} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};