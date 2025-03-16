import './App.css';
import { useState } from 'react';
import Spline from '@splinetool/react-spline/next';

function App() {
  const happyActions = [
    "Watch a funny YouTube video",
    "Read a wholesome news story",
    "Play an uplifting song",
    "Look at cute animal pictures",
    "Take a break and do some stretching",
  ];

  const madActions = [
    "Visit a rage simulator",
    "Scream into a virtual void",
    "Find a stress relief website",
    "Smash virtual objects online",
    "Take deep breaths and meditate",
  ];

  const sadActions = [
    "Listen to sad music",
    "Read an inspirational quote",
    "Write down your thoughts",
    "Watch a motivational speech",
    "Reach out to a friend",
  ];

  const [happyRoll, setHappyRoll] = useState(null);
  const [madRoll, setMadRoll] = useState(null);
  const [sadRoll, setSadRoll] = useState(null);

  const [happyAction, setHappyAction] = useState('');
  const [madAction, setMadAction] = useState('');
  const [sadAction, setSadAction] = useState('');

  const rollDice = (type) => {
    const roll = Math.floor(Math.random() * 50) + 1;
    if (type === "happy") {
      setHappyRoll(roll);
      setHappyAction(happyActions[roll % happyActions.length]);
    } else if (type === "mad") {
      setMadRoll(roll);
      setMadAction(madActions[roll % madActions.length]);
    } else if (type === "sad") {
      setSadRoll(roll);
      setSadAction(sadActions[roll % sadActions.length]);
    }
  };

  return (
    <div className="app-container">
      <div className="spline-background">
        <Spline
          scene="https://prod.spline.design/0aj50JTrcxxmzvst/scene.splinecode"
        />
      </div>
      
      <div className="content-container">
        <div className="dice-section" id="happy">
          <h2>Roll the Happy D50</h2>
          <button onClick={() => rollDice("happy")}>Roll</button>
          {happyRoll && <p>You rolled: {happyRoll}</p>}
          {happyAction && <p>Action: {happyAction}</p>}
        </div>

        <div className="dice-section" id="mad">
          <h2>Roll the Mad D50</h2>
          <button onClick={() => rollDice("mad")}>Roll</button>
          {madRoll && <p>You rolled: {madRoll}</p>}
          {madAction && <p>Action: {madAction}</p>}
        </div>

        <div className="dice-section" id="sad">
          <h2>Roll the Sad D50</h2>
          <button onClick={() => rollDice("sad")}>Roll</button>
          {sadRoll && <p>You rolled: {sadRoll}</p>}
          {sadAction && <p>Action: {sadAction}</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
