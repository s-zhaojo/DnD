import logo from './coupon.svg';
import './App.css';
import { useState } from 'react';

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

  // useState hook to store the current dice roll result
  const [diceRoll, setDiceRoll] = useState(null);
  const [action, setAction] = useState('');

  // Function to simulate the dice roll (1 to 12)
  const rollDice = () => {
    const roll = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
    setDiceRoll(roll); // Set the dice roll result to state
    setAction(actions[roll - 1]); // Set the action based on the dice roll
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Roll the D12</h1>
        <p>Find out what happens when you roll the dice!</p>
        
        {/* Dice Roll Display */}
        <div>
          <p>Dice Roll Result: {diceRoll ? diceRoll : 'Not rolled yet'}</p>
          <button onClick={rollDice}>Roll Dice</button>
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
