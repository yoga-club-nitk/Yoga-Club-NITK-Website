import React, { useState, useEffect } from 'react'

import AuthorIcon from '../assets/author.svg'
import DateTimeIcon from '../assets/datetime.svg'

const Blogs = ({ Blogs, Storage_URL }) => {
    const [modalBlog, setBlog] = useState({
        title: "Blog Title",
        author: "Author Name",
        datetime: "Date | Time",
        image: "images/blogs/#.png",
        content: "Blog Content",
        link: {
            title: "Read More",
            url: ""
        }
    })

    useEffect(() => {
        const blogInfoModal = document.getElementById('blogInfo')
        blogInfoModal.addEventListener('show.bs.modal', e => {
            const button = e.relatedTarget
            const index = button.getAttribute('data-bs-index')
            if (Blogs[index] === undefined) return console.log("Blog not found")

            const blog = Blogs[index]
            setBlog(blog)
            const blogContent = document.getElementById('blogContent')
            blogContent.innerHTML = blog.content
        })
    }, [Blogs])

    return (
        <>
            {/* Headline */}
            <div className='text-light' style={{ backgroundImage: "linear-gradient(135deg, #D6FF7F, #00B3CC)" }}>
                <div className='container pt-5 pb-5'>
                    <h1 className='display-3'>Blogs</h1>
                </div>
            </div>

            {/* Blog Grid */}
            <div className='bg-body-secondary'>
                <div className='container pt-5 pb-5'>
                    <div className='row'>
                        {Blogs.map((blog, index) => {
                            return (
                                <div className="col mb-3" key={index}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={Storage_URL + blog.image + "?alt=media"} className="card-img-top" alt="eventImage" style={{ height: "18rem" }} />
                                        <div className="card-body">
                                            <h5 className="card-title">{blog.title}</h5>
                                            <hr />
                                            <div className="row">
                                                <div className="col">
                                                    <img src={AuthorIcon} alt="Author" style={{ height: "1rem" }} />
                                                    <p className="card-text">{blog.author}</p>
                                                </div>
                                                <div className="col">
                                                    <img src={DateTimeIcon} alt="Date and Time" style={{ height: "1rem" }} />
                                                    <p className="card-text">{blog.datetime}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#blogInfo" data-bs-index={index}>Read Blog</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Blog Info Modal */}
            <div className="modal fade" id="blogInfo" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby='blogInfoModal' aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{modalBlog.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <img src={Storage_URL + modalBlog.image + "?alt=media"} className="card-img-top" alt="eventImage" style={{ height: "18rem" }} />
                        <div className="modal-body">
                            <div className="row">
                                <div className="row">
                                    <div className="col">
                                        <img src={AuthorIcon} alt="Author" style={{ height: "1rem" }} />
                                        <p className="card-text">{modalBlog.author}</p>
                                    </div>
                                    <div className="col">
                                        <img src={DateTimeIcon} alt="Date and Time" style={{ height: "1rem" }} />
                                        <p className="card-text">{modalBlog.datetime}</p>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <p className="card-text text-start" id='blogContent'></p>
                        </div>
                        <div className="modal-footer">
                            {modalBlog.link.url === "" ? null : <a href={modalBlog.link.url} className="btn btn-success" target="_blank" rel="noreferrer">{modalBlog.link.title}</a>}
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogs