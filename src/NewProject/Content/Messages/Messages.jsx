import React from 'react';
import s from './Messages.module.css';
import Dialogs from './Dialogs/Dialogs.jsx'

const Messages = (props) => {
    return (
        <div className={s.Messages}>
            <Dialogs messagesData={props.messagesData} />
        </div>
    );
};
export default Messages;