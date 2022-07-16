import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import Covid from './views/Covid';
import { CountDown, NewCountDown } from './views/CountDown';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail';
import AddNewBlog from './views/AddNewBlog';
import NotFound from './views/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
  /**
   * useEffect(f,[]) = componentDidMount run one time after render of mounting
   * useEffect(f,[pra1, pra2...]) Run <=> pra1 or pra2... is update (setPra1 or setPra2 run) <=> componentDidUpdate
  */
  useEffect(() => {
    //console.log(">>> UserEffect")
  }, [])
  useEffect(() => {
    //console.log(">>> UserEffect vs adress, todos")
  }, [adress, todos])
  const timeup = () => {
    //console.log('time up')
  }
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact>
              <Covid />
            </Route>
            <Route path="/todoApps">
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
            </Route>
            <Route path="/countdownApp">
              <hr />
              <NewCountDown
                timeup={timeup} />
              <CountDown
                timeup={timeup}
              />
            </Route>
            <Route path="/blog" exact>
              <Blog />
            </Route>
            <Route path="/blog/:id">
              <BlogDetail />
            </Route>
            <Route path="/add-new-block">
              <AddNewBlog />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>

        </header>
      </div>
    </Router>
  );
}

export default App;
