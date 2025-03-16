import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // List of possible fake actions
  const actions = [
    'Downloading a virus (just kidding!)',
    'Closes window',
    'Automatically downloading Minecraft Education Edition (fake download)',
    'Downloading Goose Virus (fake alert)',
    'Playing Rick Roll on YouTube (fake video)',
    'Watching the entire Skipidi Toilet series (fake message)',
    'Opening a random website',
    'Restarting your computer (fake restart)',
    'Leaking your IP address (fake leak)',
    'Opening Facebook (fake page)',
    'Sending a link to vote for something (fake action)',
    'Giving credit card info or shutting down your computer (fake alert)',
    'Open a random cat video at full volume.',
    'Load 30 tabs of "random word generators."',
    'Playing an audio loop of dial-up internet sounds',
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
    'Making the mouse pointer invisible',
    'Opening an old-school screensaver like “3D Maze”',
    'Switching the browser to "Incognito mode" every time you try to close it',
    'Displaying a fake "battery low" notification on a plugged-in laptop',
    'Enabling the “Caps Lock” and pretending like the keyboard is broken',
    'Automatically typing “Help me” in the search bar without control',
    'Creating an infinite loop of error messages popping up',
    'Redirecting the home page to a page full of “404” errors',
    'Reversing the colors on the screen',
    'Triggering a fake “hard disk failure” warning',
    'Creating a random countdown timer that looks like it’s about to end',
    'Setting up the browser to always open on a random, unrelated page',
    'Making a window open in the "Maximized" state',
    'Setting an auto-reply email to send out random funny messages',
    'Opening a random AI chatbot in a small window that “knows everything”',
    'Showing a fake "Your computer is infected!" warning with no option to close',
    'Opening the calculator app and making it seem like it\'s doing calculations forever',
    'Starting a fake file compression on random files',
    'Setting an annoying random sound that plays every minute',
    'Making the mouse cursor drag files without permission (fake glitch)'
  ];

  // useState hook to store the current dice roll result and dice animation state
  const [diceRoll, setDiceRoll] = useState(null);
  const [action, setAction] = useState('');
  const [isRolling, setIsRolling] = useState(false); // For controlling the dice animation

  // Function to simulate the dice roll (1 to 50)
  const rollDice = () => {
    setIsRolling(true); // Start the rolling animation
    setAction('');

    // Simulate rolling with a slight delay before showing the result
    setTimeout(() => {
      const roll = Math.floor(Math.random() * 50) + 1; // Random number between 1 and 50
      setDiceRoll(roll); // Set the dice roll result to state
      setAction(actions[roll - 1]); // Set the action based on the dice roll
      setIsRolling(false); // End the rolling animation

      // Perform the corresponding action
      performAction(roll);
    }, 1000); // 1 second delay before displaying the result
  };

  const performAction = (roll) => {
    const actionText = actions[roll - 1];

    // Action simulation logic based on the rolled action
    switch (actionText) {
      case 'Downloading a virus (just kidding!)':
            alert("Just kidding! No virus is being downloaded.");
            break;
        case 'Closes window':
            window.close();
            break;
        case 'Automatically downloading Minecraft Education Edition (fake download)':
            alert("Pretend Minecraft Education Edition is downloading...");
            break;
        case 'Downloading Goose Virus (fake alert)':
            alert("Goose Virus Downloaded! (Just kidding!)");
            break;
        case 'Playing Rick Roll on YouTube (fake video)':
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
            break;
        case 'Watching the entire Skipidi Toilet series (fake message)':
            alert("Watching the Skipidi Toilet series... (Just kidding!)");
            break;
        case 'Opening a random website ':
            // Open the "Useless Web" page in a new tab
            let uselessWindow = window.open("https://theuselessweb.com/", "_blank");

            // Wait for the page to load, then click the "Take me to a useless website" button
            uselessWindow.onload = function() {
                let button = uselessWindow.document.querySelector('.btn'); // The class for the button
                if (button) {
                    button.click();
                  }
                  };
            break;
        case 'Restarting your computer (fake restart)':
            alert("Your computer will restart... (Just kidding!)");
            break;
        case 'Leaking your IP address (fake leak)':
            alert("Leaking your IP address... (Fake, don't worry!)");
            break;
        case 'Opening Facebook (fake page)':
            window.open("https://www.facebook.com", "_blank");
            break;
        case 'Sending a link to vote for something (fake action)':
            alert("Here is the link... (Fake action!)");
            break;
        case 'Giving credit card info or shutting down your computer (fake alert)':
            alert("Don't panic! This is a fake alert!");
            break;
        case 'Open a random cat video at full volume.':
            const catVideo = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
            catVideo.play();
            alert('Cat video playing at full volume!');
            break;
        case 'Load 30 tabs of "random word generators."':
            for (let i = 0; i < 30; i++) {
                window.open("https://www.randomwordgenerator.com/", "_blank");
            }
            break;
        case 'Playing an audio loop of dial-up internet sounds':
            const dialUpAudio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3');
            dialUpAudio.loop = true;
            dialUpAudio.play();
            alert('Dial-up sound loop started!');
            break;
        case 'Opening a window with "Are you sure you want to delete everything?"':
            alert("Are you sure you want to delete everything?");
            break;
        case 'Changing your desktop wallpaper to a confusing abstract image':
            alert("Your desktop wallpaper has been changed to an abstract image!");
            break;
        case 'Opening the "Not Responding" program on the taskbar':
            alert("The program is not responding! (Fake error)");
            break;
        case 'Turning the mouse pointer into a spinning wheel (fake freeze)':
            alert("Mouse pointer is frozen! (Just kidding, it's a fake freeze)");
            break;
        case 'Starting a fake Windows update that takes forever':
            alert("Your system is updating... (It will take a while!)");
            break;
        case 'Random pop-up ad that says, “You’ve won a prize!”':
            alert("Congratulations! You’ve won a prize! (Just kidding, it's a pop-up ad!)");
            break;
        case 'Change the browser language to a random language':
            alert("Your browser language has been changed! (To something random)");

            // List of language codes (you can add more languages as you like)
            const languages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ko'];

            // Pick a random language from the list
            const randomLanguage = languages[Math.floor(Math.random() * languages.length)];

            // Redirect the user to a Google search page with the random language set
            window.location.href = `https://www.google.com/?hl=${randomLanguage}`;
            break;
        case 'Opening an email that seems like it’s from a scammer, but it’s fake':
            alert("This email is a scam! (Just kidding!)");
            break;
        case 'Shifting all your icons to one side of the screen':
            alert("All icons have been shifted to one side of the screen!");
            break;
        case 'Turning on sticky keys (but it’s fake)':
            alert("Sticky keys have been enabled! (Fake alert!)");
            break;
        case 'Redirecting every link you click to a random meme site':
            alert("Every link redirects to a meme site! (Haha)");
            break;
        case 'Opening a random "404 Page Not Found" screen':
            alert("Oops! A random 404 Page Not Found error...");
            break;
        case 'Creating a fake blue screen of death (BSOD)':
            document.body.style.backgroundColor = 'blue';
            alert('This is your fake Blue Screen of Death.');
            break;
        case 'Opening multiple calculator windows and setting them to random values':
            for (let i = 0; i < 5; i++) {
                window.open('calculator://', '_blank');
            }
            alert("Multiple calculators are now open!");
            break;
        case 'Starting a fake system scan that finds “too many problems”':
            alert("System scan complete! Found too many problems!");
            break;
        case 'Making the mouse pointer invisible':
            alert("Mouse pointer is now invisible! (Don’t worry, it’s back soon!)");
            break;
        case 'Opening an old-school screensaver like “3D Maze”':
            alert("Launching 3D Maze screensaver...");
            break;
        case 'Switching the browser to "Incognito mode" every time you try to close it':
            alert("The browser is in Incognito mode now!");
            break;
        case 'Displaying a fake "battery low" notification on a plugged-in laptop':
            alert("Battery is low! (Just kidding, it’s plugged in!)");
            break;
        case 'Enabling the “Caps Lock” and pretending like the keyboard is broken':
            alert("Caps Lock is stuck on! (Fake keyboard issue!)");
            break;
        case 'Automatically typing “Help me” uncontrollably in the search bar':
            alert("The search bar is typing 'Help me' uncontrollably!)");

            // Find the search bar (usually an input field with a name or placeholder like 'search')
            let searchBar = document.querySelector('input[type="search"], input[name="q"], input[placeholder="Search"]'); 

            // If a search bar is found
            if (searchBar) {
                let text = "Help me";
        
                // Function to simulate uncontrollable typing
                function uncontrollableTyping() {
                      searchBar.value = text;  // Set the search bar's value to "Help me"
                      setTimeout(uncontrollableTyping, 100);  // Repeats every 100ms, typing "Help me" uncontrollably
                }

                // Start the uncontrollable typing
                uncontrollableTyping();
              } else {
                  alert("No search bar found on this page.");
              }
              break;
        case 'Creating an infinite loop of error messages popping up':
            alert("Error loop started! (Fake errors!)");
            break;
        case 'Redirecting the home page to a page full of “404” errors':
            window.location.href = 'https://www.google.com/search?q=404';
            break;
        case 'Reversing the colors on the screen':
            document.body.style.filter = "invert(100%)";
            alert("Screen colors are reversed!");
            break;
        case 'Triggering a fake “hard disk failure” warning':
            alert("Hard disk failure! (Fake warning!)");
            break;
        case 'Creating a random countdown timer that looks like it’s about to end':
            alert("Countdown timer has started! (It’s fake, though)");
            break;
        case 'Setting up the browser to always open on a random, unrelated page':
            alert("Your browser will always open on a random page now!");
            break;
        case 'Making a windows open in the "Maximized" state':
            alert("All windows are now maximized!");

            // Get the screen width and height of the user's device
            const screenWidth = window.screen.width;
            const screenHeight = window.screen.height;

            // Open a new window with the maximized dimensions
            window.open('https://example.com', '_blank', `width=${screenWidth},height=${screenHeight},top=0,left=0`);
            break;
        case 'Setting an auto-reply email to send out random funny messages':
            alert("Auto-reply email with random messages set!");
            break;
        case 'Opening a random AI chatbot in a small window that “knows everything”':
            window.open("https://chatgpt.com/", "_blank");
            alert("AI Chatbot opened! (It knows everything!)");
            break;
        case 'Showing a fake "Your computer is infected!" warning with no option to close':
            alert("Your computer is infected! (Fake alert!)");
            break;
        case 'Opening the calculator app and making it seem like it\'s doing calculations forever':
            alert("Calculator is stuck on calculations forever! (Fake glitch)");
            break;
        case 'Starting a fake file compression on random files':
            alert("Compressing files... (Fake compression!)");
            break;
        case 'Setting an annoying random sound that plays every minute':
            setInterval(() => {
                new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3').play();
            }, 60000); // Play every minute
            alert("Annoying sound will play every minute!");
            break;
        case 'Making the mouse cursor drag files without permission (fake glitch)':
            alert("Mouse cursor is dragging files! (Fake glitch)");
            break;
        default:
            console.log(`Action ${actionText} is not implemented yet.`);
    }
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
