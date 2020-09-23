import React from 'react';
import s from './Dialogs.module.css';
import User from './Dialogs__User/User';
import LastMessage from './Dialogs__LastMessage/LastMessage';

const Dialogs = (props) => {
    let userElement = props.messagesData.dialogsData.map(d => <User name={d.name} id={d.id} />);
    let messageElement = props.messagesData.messagesData.map(m => <LastMessage message={m.message} addMessage={props.addMessage}/>);
    return (
        <div className={s.Dialogs}>
            <div className={s.UserItem}>
                {userElement}
            </div>
            <div className={s.LastMessageItem}>
                {messageElement}
            </div>
        </div>
    );
};

export default Dialogs;