import React from 'react';
import s from './Messages.module.css';
import Message from './Message/Message';

const Messages = (props) => {
    let newMessage = props.state_messagesPage.messagesData.map(
        m => <Message name={m.name}
            message={m.message}
            state_messagesPage={props.state_messagesPage}
            dispatch={props.dispatch} />
    );
    return (
        <div className={s.Messages}>
            {newMessage}
        </div>
    )
};

export default Messages;