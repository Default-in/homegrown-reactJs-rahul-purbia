import React, { useEffect, useState } from 'react'

import { useParams, useLocation } from 'react-router-dom'

import "./BlogPost.css"

import BlogService from './BlogService'

const BlogPost = () => {
    const { state } = useLocation();
    const { blogId } = useParams();
    const [blogData, setBlogData] = useState({})
    const [error, setError] = useState("");

    useEffect(() => {
        if (state?.blog) {
            setBlogData(state.blog);
        }
        else {
            setError("")
            BlogService.getBlogPost(parseInt(blogId))
                .then(setBlogData)
                .catch(setError)
        }
    }, [blogId])

    return (
        error
            ? <div>{error}</div>
            : <div className="blog-details-card">
                <div className='blog-title'>{blogData.title}</div>
                <div className='blog-content'>{blogData.content}</div>
            </div >
    )
}

export default BlogPost