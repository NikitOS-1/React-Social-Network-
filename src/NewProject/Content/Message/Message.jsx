import React from 'react';
import s from './Message.module.css';
import Dialogs from './Dialogs/Dialogs.jsx'

const Message = (props) => {
    return (
        <div className={s.Message}>
            <Dialogs messagesData={props.messagesData}/>
        </div>
    );
};
export default Message;