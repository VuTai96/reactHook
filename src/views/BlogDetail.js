import { useParams, useHistory, Link } from "react-router-dom";

const BlogDetail = () => {
    let { id } = useParams()
    let history = useHistory()
    const handleOnclickButton = () => {
        console.log(history);
        history.push('/blog')
    }
    return (
        <>
            <h1>view detail {id}</h1>
            <div><button onClick={handleOnclickButton}> Back</button> </div>
            {/* <div><button> <Link to='/blog'>Back</Link></button> </div> */}
        </>
    )
}
export default BlogDetail;