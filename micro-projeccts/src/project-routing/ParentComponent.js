import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Navbar'

import Home from './Home'
import Blog from './Blog'
import BlogPost from './BlogPost'
import About from './About'
import Contact from './Contact'
import PageNotFound from './PageNotFound'

const Parent = () => {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blog' element={<Blog />} />
                <Route path="/blog/:blogId" element={<BlogPost />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/contact-us' element={<Contact />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Parent
