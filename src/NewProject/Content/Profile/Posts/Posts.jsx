import React from 'react';
import s from './Posts.module.css';
import PostAdd from './PostAdd/PostAdd';
import Post from './Post/Post'

const Posts = (props) => {

    let PostData = [
        { id: 1, countLike: 14, img: { logo }, post: 'LKIOO' },
        { id: 2, countLike: 21, img: { logo }, post: 'Helloo' },
        { id: 3, countLike: 11, img: { logo }, post: 'Hoy Hey' },
        { id: 4, countLike: 14, img: { logo }, post: 'LKIOOa' },
        { id: 5, countLike: 14, img: { logo }, post: 'LKIOOa' },
        { id: 6, countLike: 14, img: { logo }, post: 'LKIOOra' },
        { id: 1, countLike: 14, img: { logo }, post: 'LKIOO' },
        { id: 2, countLike: 21, img: { logo }, post: 'Helloo' },
        { id: 3, countLike: 11, img: { logo }, post: 'Hoy Hey' },
        { id: 4, countLike: 14, img: { logo }, post: 'LKIOOa' },
        { id: 5, countLike: 14, img: { logo }, post: 'LKIOOa' },
        { id: 6, countLike: 14, img: { logo }, post: 'LKIOOra' }
    ];

    return (
        <div className={s.Posts}>
            <PostAdd />
            <Post post={PostData}/>
        </div>
    );
};

export default Posts;