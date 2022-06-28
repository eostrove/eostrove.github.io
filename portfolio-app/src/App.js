import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './static/main.scss';
import Nav from './Nav';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="body">
        <header className="header">
          <img src="./images/avatar.jpg" alt="" />blah
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload and do something.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
