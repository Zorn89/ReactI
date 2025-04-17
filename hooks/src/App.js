import React, { useState, useEffect } from 'react'; // useEffect hinzufügen
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log('Die Seite wurde zum ersten Mal geladen!');
  }, []); 

  return (
    <div className="App">
      <header className="App-header">
        <p>Klick-Zähler:</p>
        <h1>{count}</h1>
        <button onClick={handleClick}>Klick mich!</button>
      </header>
    </div>
  );
}

export default App;