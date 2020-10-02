import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import AddPost from './AddPost/AddPost';

const Posts = (props) => {
    return (
        <div className={s.Posts}>
            <AddPost updateText_AddPost={props.updateText_AddPost}
                clicks_AddPost={props.clicks_AddPost}
                state_postData={props.state_postData} />
            <Post state_postData={props.state_postData} />
        </div>
    )
};

export default Posts;