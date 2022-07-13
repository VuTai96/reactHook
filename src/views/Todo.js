
const Todo = (props) => {
    const { todos, title, deleteDataTodo } = props;
    const handleOnclickDelete = (id) => {
        //console.log('>>> check chossing id: ', id)
        deleteDataTodo(id)
    }
    return (
        <div className='list-todo-container' >
            <div className="title">
                {title}
            </div>
            {todos.map((item) => {
                return (
                    <div key={item.id}>
                        <li className='child'>{item.title}
                            &nbsp;&nbsp;
                            <span onClick={() => handleOnclickDelete(item.id)}>x</span>
                        </li>
                    </div>
                )
            })}
            <hr />
        </div>

    )
}
export default Todo;