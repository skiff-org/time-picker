import React from 'react';
import TimePicker from './TimePicker/TimePicker';
import TimeLabel from './TimePicker/TimeLabel';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>Future Tasks:</p>
        <TimePicker />
        <TimeLabel />
      </header>
    </div>
  );
}

export default App;
