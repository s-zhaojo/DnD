import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [dragNumber, setDragNumber] = useState(null);
  const [message, setMessage] = useState('Drag a number between 1 and 20 to see the action.');

  // Action handler
  const handleDrag = (event, num) => {
    event.preventDefault();
    setDragNumber(num);
    switch (num) {
      case 1:
        setMessage('Closing the app...');
        setTimeout(() => window.close(), 2000); // Simulating closing the app
        break;
      case 2:
        setMessage('Redirecting to a different part of the site...');
        setTimeout(() => window.location.href = "https://reactjs.org", 2000);
        break;
      case 10:
        setMessage('Retrying the action...');
        break;
      case 20:
        setMessage('Closing the app...');
        setTimeout(() => window.close(), 2000); // Closing after some time
        break;
      default:
        setMessage(`Action ${num} performed. Try another one!`);
    }
  };

  // Drag over event to allow dragging
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Drag start event to show that it can be dragged
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text", event.target.id);vv
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My YouTube-style App</h1>

        <div
          className="draggable-container"
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrag(e, dragNumber)}>
          <div
            className="drag-item"
            id="drag-item-1"
            draggable
            onDragStart={(e) => handleDragStart(e)}
            onDragEnd={() => handleDrag(1)}
          >
            1
          </div>
          <div
            className="drag-item"
            id="drag-item-2"
            draggable
            onDragStart={(e) => handleDragStart(e)}
            onDragEnd={() => handleDrag(2)}
          >
            2
          </div>
          <div
            className="drag-item"
            id="drag-item-10"
            draggable
            onDragStart={(e) => handleDragStart(e)}
            onDragEnd={() => handleDrag(10)}
          >
            10
          </div>
          <div
            className="drag-item"
            id="drag-item-20"
            draggable
            onDragStart={(e) => handleDragStart(e)}
            onDragEnd={() => handleDrag(20)}
          >
            20
          </div>
        </div>

        <p>{message}</p>
      </header>
    </div>
  );
}

export default App;
