import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './NewProject/App';
import { addPost , updateNewPostText, addMessage, updateNewMessage} from './Redux/State';

export let rerenderEntireTree = (State) => {
  ReactDOM.render(
      <BrowserRouter>
        <App State={State} 
        addPost={addPost}
        updateNewPostText={updateNewPostText} 
        addMessage={addMessage}
        updateNewMessage={updateNewMessage}/>
      </BrowserRouter>, document.getElementById('root')
  );
};