import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';
import Todo from './views/Todo';

function App() {
  let [name, setName] = useState('TaiVu')
  const [adress, setAdress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Taivu', type: 'taivu' },
    { id: 'todo2', title: 'BabyShark', type: 'taivu' },
    { id: 'todo3', title: 'Potter', type: 'babyShark' },
    { id: 'todo4', title: 'reading book', type: 'babyShark' },

  ])

  const handleOnclickButton = () => {
    if (!adress) {
      alert('invalid new todo');
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 10001),
      title: adress,
      type: 'taivu'
    }
    setTodos([...todos, newTodo])
    setAdress("")
  }

  const handleOnchangeInput = (event) => {
    setAdress(event.target.value)
  }

  const deleteDataTodo = (id) => {
    let tempTodos = todos.filter(item => item.id !== id);
    setTodos(tempTodos)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with babyShark - {name}</h1>
        <Todo
          todos={todos}
          title={'All todo'}
          deleteDataTodo={deleteDataTodo}
        />
        <Todo
          todos={todos.filter(item => item.type === 'taivu')}
          title={'todo making is TaiVu'}
          deleteDataTodo={deleteDataTodo}
        />

        <input type="text" value={adress} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={(event) => handleOnclickButton(event)}>click me</button>
      </header>
    </div>
  );
}

export default App;
