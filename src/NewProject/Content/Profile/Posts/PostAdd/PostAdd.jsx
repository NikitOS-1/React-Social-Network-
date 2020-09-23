import React from 'react';
import s from './PostAdd.module.css';

const PostAdd = (props) => {
    let newPostElement = React.createRef();
    let addPosts = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return (
        <div className={s.PostAdd}>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            <button onClick={addPosts}>Add Post</button>
        </div>
    );
};

export default PostAdd;