import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './NewProject/App';
import { addPost , updateNewPostText, addMessage} from './Redux/State';

export let rerenderEntireTree = (State) => {
  ReactDOM.render(
      <BrowserRouter>
        <App State={State} 
        addPost={addPost}
        updateNewPostText={updateNewPostText} 
        addMessage={addMessage}/>
      </BrowserRouter>, document.getElementById('root')
  );
};