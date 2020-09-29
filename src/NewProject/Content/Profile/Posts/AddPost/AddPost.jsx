import React from 'react';
import s from './AddPost.module.css'

const AddPost = (props) => {
    let text_AddPost = React.createRef();
    let changeText_AddPost = () => {
        let text = text_AddPost.current.value;
        props.updateText_AddPost(text);
    }
    let click_AddPost = () => {
        props.clicks_AddPost();
    }
    return (
        <div className={s.AddPost}>
            <textarea onChange={changeText_AddPost} ref={text_AddPost}
                value={props.State_PostData.newPostText} />
            <button onClick={click_AddPost} >Add Post</button>
        </div>
    )
};

export default AddPost;