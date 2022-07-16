import { useHistory } from "react-router-dom"

const NotFound = () => {
    let history = useHistory()
    const handleClickBtn = () => {

        history.push('/')
    }
    return (
        <div >
            <div> Link is not found</div>
            <button className="btn btn-primary" onClick={handleClickBtn}>Go home page</button>
        </div>
    )
}
export default NotFound