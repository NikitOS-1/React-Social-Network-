import React from 'react';
import s from './Posts.module.css';
import PostAdd from './PostAdd/PostAdd';
import Post from './Post/Post';

const Posts = (props) => {

    return (
        <div className={s.Posts}>
            <PostAdd />
            <Post PostData={props.PostData}/>
        </div>
    );
};

export default Posts;