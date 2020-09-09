import React from 'react';
import s from './Post.module.css';

const PostIng = (props) => {
    
    return (
        <div className={s.Post}>
            <div className={s.fullPost}>
                <h3>{props.post}</h3>
                <p>{props.countLike}</p>
            </div>
        </div>
    )
};


const Post = (props) => {
    let postElement = props.PostData.map(p => <PostIng id={p.id} countLike={p.countLike} post={p.post} />);
    return (
        <div>
            {postElement}
        </div>
    );
};

export default Post;