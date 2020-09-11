import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import App from './NewProject/App';
import './index.css';
import State from './Redux/State';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App State={State} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// dev test 0.4
//PostData={PostData} messagesData={messagesData} dialogsData={dialogsData}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
