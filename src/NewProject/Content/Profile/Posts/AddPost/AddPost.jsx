import React from 'react';
import s from './AddPost.module.css'
import { updateTextCreateAction, clickCreateAction } from '../../../../../Redux/store';

const AddPost = (props) => {

    let text_AddPost = React.createRef();

    let updateText_AddPost = () => {
        let text = text_AddPost.current.value;
        props.dispatch(updateTextCreateAction(text));
    }

    let click_AddPost = () => {
        props.dispatch(clickCreateAction());
    }
    return (
        <div className={s.AddPost}>
            <textarea onChange={updateText_AddPost} ref={text_AddPost}
                value={props.state_profilePage.newPostText} />
            <button onClick={click_AddPost} >Add Post</button>
        </div>
    )
};

export default AddPost;