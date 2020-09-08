import React from 'react';
import s from './Message.module.css';
import Dialogs from './Dialogs/Dialogs.jsx'

const Message = () => {
    return (
        <div className={s.Message}>
            <Dialogs />
        </div>
    );
};
export default Message;