import React from 'react';
import s from './AddPost.module.css'

const AddPost = (props) => {

    let text_AddPost = React.createRef();

    let changeText_AddPost = () => {
        props.dispatch({ type: 'UPDATE-TEXT__ADD-POST', text: text_AddPost.current.value });
    }

    let click_AddPost = () => {
        props.dispatch({ type: 'CLICKS__ADD-POST' });
    }
    return (
        <div className={s.AddPost}>
            <textarea onChange={changeText_AddPost} ref={text_AddPost}
                value={props.state.newPostText}/>
            <button onClick={click_AddPost} >Add Post</button>
        </div>
    )
};

export default AddPost;