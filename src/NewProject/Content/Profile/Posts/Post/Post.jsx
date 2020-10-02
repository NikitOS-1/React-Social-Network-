import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    let AddingPost = (props) => {
        return (
            <div>
                <h1>
                    {props.text}
                </h1>
            </div>
        );
    };

    let addingNewPostText = props.state_postData.postData.map(p => <AddingPost text={p.post} />);

    return (
        <div className={s.Post}>
            {addingNewPostText}
        </div>
    );
};

export default Post;