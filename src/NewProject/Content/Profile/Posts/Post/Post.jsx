import React from 'react';
import s from './Post.module.css';
import ava from './logo512.png'

const PostIng = (props) => {
    return (
        <div className={s.Post}>
            <div className={s.fullPost}>
                <img src={ava} alt='Your Ava'/>
                <p className={s.postText}>{props.post}</p>
                <p className={s.id}>{props.id}</p>
                <p className={s.countLike}>Likes: {props.countLike}</p>
            </div>
        </div>
    )
};


const Post = (props) => {
    let postElement = props.PostData.map(p => <PostIng id={p.id} countLike={p.countLike} post={p.post} ava={ava}/>);
    return (
        <div>
            {postElement}
        </div>
    );
};

export default Post;