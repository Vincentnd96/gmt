import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [gmtTime, setGmtTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const gmtString = now.toUTCString();
      setGmtTime(gmtString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Current GMT Time</h1>
        <p>{gmtTime}</p>
      </header>
    </div>
  );
}

export default App;
