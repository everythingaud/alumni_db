import React from 'react';
import logo from './logo.svg';
import ListTest from './ListTest.js';
import './App.css';
import LogInForm from './components/LogIn';
import Login from './pages/sign_in';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
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
            <ListTest />
        <Login />
        </div>
    );
}

export default App;
