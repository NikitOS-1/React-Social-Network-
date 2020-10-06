import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import AddPost from './AddPost/AddPost';

const Posts = (props) => {
    return (
        <div className={s.Posts}>
            <AddPost state_profilePage={props.state_profilePage}
                dispatch={props.dispatch} />
            <Post state_profilePage={props.state_profilePage} />
        </div>
    )
};

export default Posts;