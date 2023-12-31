import { useEffect } from 'react';
import './App.css';

function App() {
  const checkApi = async () => {
    const url = 'http://127.0.0.1:8000/api/products'
    const response = await fetch(url);
    console.log(response);
  }

  useEffect(() => {
    checkApi();
  })
  return (
    <div className="App">
      <header className="App-header">

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
