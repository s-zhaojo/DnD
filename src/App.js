import React, { useState } from 'react';
import MapComponent from './components/MapComponent';

function App() {
  // States to track the app's page and whether it's closed
  const [isAppClosed, setIsAppClosed] = useState(false);
  const [currentPage, setCurrentPage] = useState('home'); // Example page

  // Function to simulate the dice roll
  const rollDice = () => {
    return Math.floor(Math.random() * 19) + 1;
  };

  // Function to handle any action
  const handleAction = (action) => {
    const diceRoll = rollDice();
    console.log(`Dice Roll: ${diceRoll}`);

    if (diceRoll <= 10) {
      // Terrible actions (1-10)
      if (diceRoll === 1) {
        alert('You rolled a 1! The website is closing!');
        setIsAppClosed(true);
      } else if (diceRoll === 2) {
        alert('You rolled a 2! You are being redirected to a completely different area!');
        setCurrentPage('redirected');
      } else {
        alert(`You rolled a ${diceRoll}. Try again!`);
      }
    } else if (diceRoll <= 15) {
      // Alright actions (11-15)
      alert('Nothing happened. Try again!');
    } else {
      // Closing app (16-19)
      alert('You rolled a 16-19! Closing the app!');
      setIsAppClosed(true);
    }
  };

  // Handle navigating between pages
  const navigateToPreviousPage = () => {
    handleAction('back');
    if (!isAppClosed) {
      setCurrentPage('previous'); // Example logic for back navigation
    }
  };

  const navigateToNextPage = () => {
    handleAction('next');
    if (!isAppClosed) {
      setCurrentPage('next'); // Example logic for next page
    }
  };

  // Prevent rendering if the app is closed
  if (isAppClosed) {
    return <div>App Closed</div>;
  }

  return (
    <div>
      <h1>Ecovoyage</h1>
      <p>Current Page: {currentPage}</p>

      <button onClick={navigateToPreviousPage}>Back</button>
      <button onClick={navigateToNextPage}>Next</button>

      {/* Render the MapComponent based on the current page */}
      {currentPage === 'home' && <MapComponent />}
      {currentPage === 'redirected' && <div>You've been redirected! New Area</div>}
    </div>
  );
}

export default App;
