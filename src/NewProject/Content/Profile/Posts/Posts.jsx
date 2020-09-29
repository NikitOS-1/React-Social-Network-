import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css';
import AddPost from './AddPost/AddPost';

const Posts = (props) => {
    return (
        <div className={s.Posts}>
            <AddPost updateText_AddPost={props.updateText_AddPost}
                clicks_AddPost={props.clicks_AddPost}
                State_PostData={props.State_PostData} />
            <Post State_PostData={props.State_PostData} />
        </div>
    )
};

export default Posts;