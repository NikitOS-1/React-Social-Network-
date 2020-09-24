import React from 'react';
import s from './LastMessage.module.css';

const LastMessage = (props) => {
    let inputText = React.createRef();
    let addText = () => {
        let text = inputText.current.value;
        props.addText(text);
    }
    let onMessageChange = () => {
        let text = inputText.current.value;
        props.updateNewMessage(text)
    }
    return (
        <div className={s.LastMessage}>
            {props.message}
            <textarea onChange={onMessageChange} ref={inputText} />
            <button onClick={addText}>Send</button>
        </div>
    )
};

export default LastMessage;