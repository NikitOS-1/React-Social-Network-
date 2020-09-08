import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import dialogsData from '../../../../Data/dialogsData.js';
import messagesData from './../../../../Data/messagesData.js';

const Dialog = (props) => {
    let path = '/message/' + props.id;
    return (
        <div className={s.Dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};
const Message = (props) => {
    return (
        <div className={s.Message}>
            {props.message}
        </div>
    )
};

const Dialogs = () => {
    let dialogsElement = dialogsData.map(d => <Dialog name={d.name} id={d.id} />);
    let messageElement = messagesData.map(m => <Message message={m.message} />);
    return (
        <div className={s.Dialogs}>
            <div className={s.DialogItem}>
                {dialogsElement}
            </div>
            <div className={s.MessageItem}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;