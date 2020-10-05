import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import AddPost from './AddPost/AddPost';

const Posts = (props) => {
    return (
        <div className={s.Posts}>
            <AddPost dispatch={props.dispatch}
                state={props.state.profilePage} />
            <Post state={props.state.profilePage} />
        </div>
    )
};

export default Posts;