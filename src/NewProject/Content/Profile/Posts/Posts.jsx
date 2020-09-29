import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import AddPost from './AddPost/AddPost';

const Posts = () => {
    return (
        <div className={s.Posts}>
            <AddPost />
            <Post />
        </div>
    )
};

export default Posts;