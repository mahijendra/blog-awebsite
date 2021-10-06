import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {blogSlice, setBlog} from '../../../features/blogSlice';
import './Blog.css';

const Blog = ({ id, title, content, timestamp, username , props  }) => {
    const truncate = (str) => {
        return str.length > 10 ? str.substring(0, 75) + '...' : str;
    };

    const dispatch = useDispatch();
    const history = useHistory();


    return (
        <div
            className='blog'
            onClick={() => {
                dispatch(
                    setBlog({
                        blogTitle: title,
                        blogContent: content,
                        blogAuthor: username,
                        blogId: id
                    })
                );

                history.push(`/${id}/read`);
            }}
        >

            <div className='blog__content btn-floating halfway-fab waves-effect waves-light red'>
                <h3 className='blog___title'>{title}</h3>
                <p className='blog__timestamp'>{timestamp}</p>
                <h5 className='blog__summary'>{truncate(content)}</h5>
                <Link to='/' className='blog__readMore'>Read More...</Link>
                <p className='blog__author'>Author : {username}</p>

                <div className='edit__delete'>
                    <Link to={"blogPost/editBlog"} className='blog__edit'>Edit Blog</Link>
                    <Link to={'/'} className='blog__edit'>Delete Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;