import React from 'react';
import s from './Posts.module.css';
import PostAdd from './PostAdd/PostAdd';
import Post from './Post/Post';

const Posts = (props) => {
    return (
        <div className={s.Posts}>
            <PostAdd addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
            <Post PostData={props.PostData.PostData}/>
        </div>
    );
};

export default Posts;