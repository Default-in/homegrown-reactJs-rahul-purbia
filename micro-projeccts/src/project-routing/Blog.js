import React, { useState, useEffect } from 'react'

import "./Blog.css"

import { useNavigate } from 'react-router-dom'

import BlogService from './BlogService'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        BlogService.getBlogs()
            .then(setBlogs)
    }, [])

    return (
        <div className="blog-container">
            {blogs.map((blog) => <div className='blog-details' key={blog.id}>
                <div>{blog.title}</div>
                <div>{blog.desc}</div>
                <button onClick={() => navigate(`/blog/${blog.id}`, { state: { blog } })}>See Post</button>
            </div>
            )}
        </div>
    )
}

export default Blog