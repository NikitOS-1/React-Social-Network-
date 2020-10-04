import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import AddPost from './AddPost/AddPost';

const Posts = (props) => {
    return (
        <div className={s.Posts}>
            <AddPost dispatch={props.dispatch}
                state_postData={props.state_postData} />
            <Post state_postData={props.state_postData} />
        </div>
    )
};

export default Posts;