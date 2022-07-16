import { useState } from "react";
import axios from 'axios'

const AddNewBlog = (props) => {
    let [title, setTitle] = useState('');
    let [body, setBody] = useState('');

    const handleOnClickSubmit = async (event) => {
        //event.preventDefault()
        if (!title) {
            alert('title empty')
            return;
        }
        if (!body) {
            alert('body empty')
            return;
        }
        console.log(title, body)
        const data = {
            title: title,
            body: body,
            userId: 1,
        }
        let res = await axios.post('https://jsonplaceholder.typicode.com/posts', data)
        //console.log('>>> check res data: ', res)
        if (res && res.data) {
            console.log('>>> check res data: ', res.data)
            props.handleAddNewBlock(res.data)
        }
    }
    return (
        /* có thể dùng form kết hợp Regular expressions pattern  để validate dữ liệu (cả trong hàm conclick)*/
        <>
            <div className="Add-New-Blog-Container">
                <div className="title"><strong > --- add new block ---</strong></div>
                <label className="label">title:</label>
                <input className='input' type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className="label">body:</label>
                <input className='input' type='text' value={body} onChange={(e) => setBody(e.target.value)} />
                <button className="button" onClick={handleOnClickSubmit}>submit</button>

            </div>

            {/* <form>
                <label className="label">title:</label>
                <input className='input' type='text' pattern="[A-Za-z]{3}" title="Three letter country code"
                    value={title} onChange={(e) => setTitle(e.target.value)} />
                <label className="label">body:</label>
                <input className='input' type='text' pattern="[A-Za-z]{3}" title="Three letter country code"
                    value={body} onChange={(e) => setBody(e.target.value)} /><br /><br />
                <input type="submit" value="Submit" onClick={(e) => handleOnClickSubmit(e)} />
            </form> */}
        </>


    )

}
export default AddNewBlog;

