import React from 'react';
import s from './Message.module.css';
import { NavLink } from 'react-router-dom';
import { updateTextMessageCreateAction, clickMessageCreateAction } from '../../../../Redux/store';

const Message = (props) => {
    let text = React.createRef()
    let changeTextMessage = () => {
        let textValue = text.current.value;
        props.dispatch(updateTextMessageCreateAction(textValue));
    }
    let sendMessage = () => {
        props.dispatch(clickMessageCreateAction());
    };

    return (
        <div className={s.Message}>
            <div className={s.MessageName}>
                <NavLink to={'/' + props.name}>{props.name}</NavLink>
            </div>
            <div className={s.MessageText}>
                {props.message}
            </div>
            <div className={s.MessageTextArea}>
                <textarea value={props.state_messagesPage.newMessage}
                    placeholder='Write your message'
                    onChange={changeTextMessage}
                    ref={text} />
                <button onClick={sendMessage}> Send </button>
            </div>
        </div>
    )
};

export default Message;