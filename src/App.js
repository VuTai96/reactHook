import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


function App() {
  let [name, setName] = useState('TaiVu')
  const [adress, setAdress] = useState('')

  const handleOnclickButton = (event) => {
    setName(adress)
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
        <input type="text" value={adress} onChange={(event) => handleOnchangeInput(event)} />
        <button type="button" onClick={(event) => handleOnclickButton(event)}>click me</button>
      </header>
    </div>
  );
}

export default App;
