import React from 'react';
import s from './Posts.module.css';
import PostAdd from './PostAdd/PostAdd';
import Post from './Post/Post';
//import logo from './Post/logo512.png';

const Posts = (props) => {

    return (
        <div className={s.Posts}>
            <PostAdd />
            <Post PostData={props.PostData}/>
        </div>
    );
};

export default Posts;