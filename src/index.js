import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './NewProject/App';
import './index.css';
import logo from './NewProject/Content/Profile/Posts/Post/logo512.png';

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


ReactDOM.render(  
  <React.StrictMode>
    <App PostData={PostData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
