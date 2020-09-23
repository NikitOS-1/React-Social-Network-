import React from 'react';
import s from './LastMessage.module.css';

const LastMessage = (props) => {
    let inputText = React.createRef();
    let addText = () => {
        let text = inputText.current.value;
        alert(text)
    }
    return (
        <div className={s.LastMessage}>
            {props.message}
            <textarea ref={inputText}></textarea>
            <button onClick={addText}>Send</button>
        </div>
    )
};

export default LastMessage;