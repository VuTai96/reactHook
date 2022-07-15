import { useParams, useHistory, Link } from "react-router-dom";
import useFetch from "../Customize/fetch";
import './Blog.scss'


const BlogDetail = () => {
    let { id } = useParams()
    let history = useHistory()
    const handleOnclickButton = () => {
        console.log(history);
        history.push('/blog')
    }
    let { data: dataDetail, isLoading, isError } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)
    return (
        <>
            {dataDetail &&
                <>
                    {isLoading ?
                        <div className="Blog-container">Loading...</div>
                        :
                        <div className="Blog-container">
                            <div>userId: {dataDetail.userId}</div>
                            <div>id: {dataDetail.id}</div>
                            <div>title: {dataDetail.title}</div>
                            <div>body: {dataDetail.body}</div>
                        </div>
                    }
                </>
            }

            <div><button onClick={handleOnclickButton}> Back</button> </div>
            {/* <div><button> <Link to='/blog'>Back</Link></button> </div> */}
        </>
    )
}
export default BlogDetail;