import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:54321/infoDevice', {
      headers: {
        'Accept': 'application/json'
      },
      method: 'GET'
    })
      .then(responde => responde.json())
      .then(data => console.log(`Prueba 3 ${JSON.stringify(data)}`))
  }, []);

  useEffect(() => {
    fetch('http://localhost:12345/?printer=2;;N;;Documenta', {
      headers: {
        'Accept': 'application/json'
      },
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => console.log(`Ticket 3 ${JSON.stringify(data)}`))
  })
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
    </div>
  );
}

export default App;
