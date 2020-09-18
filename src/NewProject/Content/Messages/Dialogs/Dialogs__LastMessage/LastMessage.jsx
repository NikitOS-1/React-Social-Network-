import React from 'react';
import s from './LastMessage.module.css';

const LastMessage = (props) => {
    return (
        <div className={s.LastMessage}>
            {props.message}
        </div>
    )
};

export default LastMessage;