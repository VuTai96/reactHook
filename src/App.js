import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


function App() {
  let [name, setName] = useState('TaiVu')
  const [adress, setAdress] = useState('')
  const [todos, setTodos] = useState([
    { id: 'todo1', title: 'Taivu' },
    { id: 'todo2', title: 'BabyShark' },
    { id: 'todo3', title: 'Potter' },
  ])

  const handleOnclickButton = () => {
    if (!adress) {
      alert('invalid new todo');
      return;
    }
    let newTodo = {
      id: Math.floor(Math.random() * 10001),
      title: adress
    }
    setTodos([...todos, newTodo])
    setAdress("")
  }

  const handleOnchangeInput = (event) => {
    setAdress(event.target.value)
  }
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with babyShark - {name}</h1>
        <div className='list-todo-container' >
          {
            todos.map((item) => {
              return (
                <li className='child' key={item.id}>{item.title}</li>
              )
            })
          }
        </div>

        <input type="text" value={adress} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={(event) => handleOnclickButton(event)}>click me</button>
      </header>
    </div>
  );
}

export default App;
