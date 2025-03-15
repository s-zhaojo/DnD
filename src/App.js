import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // List of possible fake actions
  const actions = [
    'Downloading a virus (just kidding!)',
    'Closing the tab (fake close)',
    'Automatically downloading Minecraft Education Edition (fake download)',
    'Downloading Goose Virus (fake alert)',
    'Playing Rick Roll on YouTube (fake video)',
    'Watching the entire Skipidi Toilet series (fake message)',
    'Opening a random website (fake opening)',
    'Restarting your computer (fake restart)',
    'Leaking your IP address (fake leak)',
    'Opening Facebook (fake page)',
    'Sending a link to vote for something (fake action)',
    'Giving credit card info or shutting down your computer (fake alert)'
  ];

  // useState hook to store the current dice roll result and dice animation state
  const [diceRoll, setDiceRoll] = useState(null);
  const [action, setAction] = useState('');
  const [isRolling, setIsRolling] = useState(false); // For controlling the dice animation

  // Function to simulate the dice roll (1 to 12)
  const rollDice = () => {
    setIsRolling(true); // Start the rolling animation
    setAction('');

    // Simulate rolling with a slight delay before showing the result
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
      setDiceRoll(roll); // Set the dice roll result to state
      setAction(actions[roll - 1]); // Set the action based on the dice roll
      setIsRolling(false); // End the rolling animation
    }, 1000); // 1 second delay before displaying the result
  };

  useEffect(() => {
    // Reset the dice roll result after animation
    if (!isRolling && diceRoll !== null) {
      const roll = diceRoll; // Grab the roll result
      setAction(actions[roll - 1]);
    }
  }, [diceRoll, isRolling]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Roll the D12</h1>
        <p>Find out what happens when you roll the dice!</p>

        {/* 3D Dice Roll Animation */}
        <div className="dice-container">
          <div className={`dice ${isRolling ? 'rolling' : ''}`}>
            <p>{diceRoll ? diceRoll : '?'}</p>
          </div>
        </div>

        {/* Dice Roll Button */}
        <div>
          <button onClick={rollDice} disabled={isRolling}>Roll Dice</button>
        </div>

        {/* Action Display */}
        {action && (
          <div className="action">
            <p>{action}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
