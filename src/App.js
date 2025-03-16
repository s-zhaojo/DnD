import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // List of possible fake actions
  const actions = [
  'Downloading a virus (just kidding!)',
  window.close();
  /*
  'Automatically downloading Minecraft Education Edition (fake download)',
  'Downloading Goose Virus (fake alert)',
  'Playing Rick Roll on YouTube (fake video)',
  'Watching the entire Skipidi Toilet series (fake message)',
  'Opening a random website (fake opening)',
  'Restarting your computer (fake restart)',
  'Leaking your IP address (fake leak)',
  'Opening Facebook (fake page)',
  'Sending a link to vote for something (fake action)',
  'Giving credit card info or shutting down your computer (fake alert)',
  'Open a random cat video at full volume.',
  'Load 30 tabs of "random word generators."',
  'Playing an audio loop of dial-up internet sounds',
  
  // First 30
  'Opening a window with "Are you sure you want to delete everything?"',
  'Changing your desktop wallpaper to a confusing abstract image',
  'Opening the "Not Responding" program on the taskbar',
  'Turning the mouse pointer into a spinning wheel (fake freeze)',
  'Starting a fake Windows update that takes forever',
  'Random pop-up ad that says, “You’ve won a prize!”',
  'Change the browser language to a random language',
  'Opening an email that seems like it’s from a scammer, but it’s fake',
  'Shifting all your icons to one side of the screen',
  'Turning on sticky keys (but it’s fake)',
  'Redirecting every link you click to a random meme site',
  'Opening a random "404 Page Not Found" screen',
  'Creating a fake blue screen of death (BSOD)',
  'Opening multiple calculator windows and setting them to random values',
  'Starting a fake system scan that finds “too many problems”',
  
  // First 45
  'Making the mouse pointer invisible',
  'Opening an old-school screensaver like “3D Maze”',
  'Switching the browser to "Incognito mode" every time you try to close it',
  'Displaying a fake "battery low" notification on a plugged-in laptop',
  'Enabling the “Caps Lock” and pretending like the keyboard is broken',
  'Automatically typing “Help me” in the text editor without control',
  'Creating an infinite loop of error messages popping up',
  'Redirecting the home page to a page full of “404” errors',
  'Reversing the colors on the screen',
  'Triggering a fake “hard disk failure” warning',
  'Creating a random countdown timer that looks like it’s about to end',
  'Setting up the browser to always open on a random, unrelated page',
  'Making all the windows open in the "Maximized" state',
  'Setting an auto-reply email to send out random funny messages',
  'Opening a random AI chatbot in a small window that “knows everything”',
  
  // First 50
  'Showing a fake "Your computer is infected!" warning with no option to close',
  'Opening the calculator app and making it seem like it\'s doing calculations forever',
  'Starting a fake file compression on random files',
  'Setting an annoying random sound that plays every minute',
  'Making the mouse cursor drag files without permission (fake glitch)'
    */
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
      const roll = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 12
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
        <h1>Roll the D50</h1>
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
