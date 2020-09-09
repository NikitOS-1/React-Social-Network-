import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

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

const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map(d => <Dialog name={d.name} id={d.id} />);
    let messageElement = props.messagesData.map(m => <Message message={m.message} />);
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