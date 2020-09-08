import React from 'react';
import s from './PostAdd.module.css';

const Post = () => {
    return (
        <div className={s.Post}>
            <textarea width="150px" height="300px"></textarea>
            <button type="button">Add Post</button>
        </div>
    );
};

export default Post;