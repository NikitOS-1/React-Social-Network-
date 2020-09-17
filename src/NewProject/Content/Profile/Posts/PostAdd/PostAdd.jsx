import React from 'react';
import s from './PostAdd.module.css';

const Post = () => {
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }
    return (
        <div className={s.Post}>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Add Post</button>
        </div>
    );
};

export default Post;