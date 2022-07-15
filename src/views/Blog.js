import useFetch from "../Customize/fetch";
import './Blog.scss'
import { Link, useHistory } from "react-router-dom";


// https://jsonplaceholder.typicode.com/todos

const Blog = () => {
    let { data: dataBlogs, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false)
    let newData = dataBlogs.slice(0, 8);
    //console.log(newData)
    let history = new useHistory()
    const handleAddNewBlock = () => {
        history.push('/add-new-block')
    }
    return (
        <>
            <div className="Add-new-block"><button onClick={handleAddNewBlock}>+ AddNewBlog</button></div>
            <div className="blog-container">
                {!isLoading &&
                    newData.map(item => {
                        return (
                            <div className="single-blog" key={item.id}>
                                <div className="title"> {item.title}</div>
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