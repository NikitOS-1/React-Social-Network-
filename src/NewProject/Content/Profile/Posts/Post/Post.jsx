import React from 'react';
import s from './Post.module.css';
import logo from './logo512.png'
import PostData from '../../../../../Data/postData.js'

const PostIng = (props) => {
    return (
        <div className={s.Post}>
            <div className={s.fullPost}>
                <img src={logo} alt="Logo" />
                <h3>{props.post}</h3>
                <p>{props.countLike}</p>
            </div>
        </div>
    )
};

const Post = (props) => {
    let postElement = PostData.map(p => <PostIng id={p.id} countLike={p.countLike} post={p.post} img={p.img} />);
    return (
        <div>
            {postElement}
        </div>
    );
};

export default Post;