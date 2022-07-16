import useFetch from "../Customize/fetch";
import './Blog.scss'
import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddNewBlog from "./AddNewBlog";


// https://jsonplaceholder.typicode.com/todos

const Blog = () => {

    const [show, setShow] = useState(false);
    const [newData, setNewData] = useState([])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let { data: dataBlogs, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)

    useEffect(() => {
        setNewData(dataBlogs.slice(0, 8))
    }, [dataBlogs])

    //console.log(newData)
    //let history = new useHistory()
    const handleAddNewBlock = (blog) => {
        const data = newData;
        data.unshift(blog)
        setShow(false)
        setNewData(data)
        //console.log('>>>newdata: ', newData)
    }
    const handleDeleteClick = (id) => {
        const data = newData
        const dataFilter = data.filter((item) => item.id !== id)
        setNewData(dataFilter)
    }


    return (

        <>
            {console.log('>>>-----so lan render----------------')}
            <Button variant="primary" className="my-3" onClick={handleShow}>
                + AddNewBlog
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddNewBlog
                        handleAddNewBlock={handleAddNewBlock}
                    />
                </Modal.Body>
            </Modal>


            {/* <div className="Add-new-block"><button onClick={handleAddNewBlock}>+ AddNewBlog</button></div> */}
            <div className="blog-container">
                {!isLoading &&
                    newData.map(item => {
                        return (
                            <div className="single-blog" key={item.id + Math.random() * 10001}>
                                <div className="title"> {item.title} ---
                                    <span onClick={() => handleDeleteClick(item.id)}>x</span></div>
                                <div className="body"> {item.body}</div>
                                <button className="view">
                                    <Link to={'/blog/' + item.id}>view detail</Link>
                                </button>
                            </div>
                        )
                    })
                }
                {isLoading &&
                    <div>Loading...</div>
                }
            </div>
        </>
    )
}
export default Blog;



