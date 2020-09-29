import React from 'react';
import s from './AddPost.module.css'

const AddPost = () => {
    return (
        <div className={s.AddPost}>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
    )
};

export default AddPost;