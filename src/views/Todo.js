
const Todo = (props) => {
    const todos = props.todos;
    return (
        <div className='list-todo-container' >
            {todos.map((item) => {
                return (
                    <li className='child' key={item.id}>{item.title}</li>
                )
            })}
        </div>
    )
}
export default Todo;