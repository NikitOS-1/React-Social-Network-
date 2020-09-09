import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './NewProject/App';
import './index.css';

let PostData = [
  { id: 1, countLike: 14, post: 'LKIOO' },
  { id: 2, countLike: 21, post: 'Helloo' },
  { id: 3, countLike: 11, post: 'Hoy Hey' },
  { id: 4, countLike: 14, post: 'LKIOOa' },
  { id: 5, countLike: 14, post: 'LKIOOa' },
  { id: 6, countLike: 14, post: 'LKIOOra' },
  { id: 1, countLike: 14, post: 'LKIOO' },
  { id: 2, countLike: 21, post: 'Helloo' },
  { id: 3, countLike: 11, post: 'Hoy Hey' },
  { id: 4, countLike: 14, post: 'LKIOOa' },
  { id: 5, countLike: 14, post: 'LKIOOa' },
  { id: 6, countLike: 14, post: 'LKIOOra' }
];
let messagesData = [
  { id: 1, message: 'hey' },
  { id: 2, message: 'Yo' },
  { id: 3, message: 'who knows it' },
  { id: 4, message: 'switch' },
  { id: 5, message: 'how offen do you watch this code' },
  { id: 6, message: 'west coast customs' }
];
let dialogsData = [
  { id: 1, name: 'Dima' },
  { id: 2, name: 'Rima' },
  { id: 3, name: 'Sasha' },
  { id: 4, name: 'Sveta' },
  { id: 5, name: 'Vasya' },
  { id: 6, name: 'Valera' }
];

ReactDOM.render(  
  <React.StrictMode>
    <App PostData={PostData} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
//master v.0.2



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
