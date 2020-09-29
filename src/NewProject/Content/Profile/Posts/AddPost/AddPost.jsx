import React from 'react';
import s from './AddPost.module.css'

const AddPost = () => {
    let text_AddPost = React.createRef();
    let changeText_AddPost = () => {
        let text = text_AddPost.current.value;
    }
    let click_AddPost = () => {
        
    }
    return (
        <div className={s.AddPost}>
            <textarea onChange={changeText_AddPost} ref={text_AddPost} />
            <button onClick={click_AddPost} >Add Post</button>
        </div>
    )
};

export default AddPost;