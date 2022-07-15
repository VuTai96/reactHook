import { useState } from "react";
const AddNewBlog = () => {
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');
    const handleOnClickSubmit = () => {
        console.log(title, body)
    }
    return (
        <>
            <div className="Add-New-Blog-Container">
                <div ><strong> add new block</strong></div>
                <label className="label">title:</label>
                <input className='input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className="label">body:</label>
                <input className='input' type='text' value={body} onChange={(e) => setBody(e.target.value)} />
                <button className="button" onClick={handleOnClickSubmit}>submit</button>

            </div>
        </>
    )

}
export default AddNewBlog;

