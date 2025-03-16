import React, { useState } from 'react';
import Spline from './react-spline';
import './App.css';

function App() {
  // YouTube video links for each mood
  const happyVideos = [
    "https://www.youtube.com/watch?v=ZbZSe6N_BXs", // Happy - Pharrell Williams
    "https://www.youtube.com/watch?v=OPf0YbXqDm0", // Can't Stop the Feeling! - Justin Timberlake
    "https://www.youtube.com/watch?v=y6Sxv-sUYtM", // Uptown Funk - Mark Ronson ft. Bruno Mars
    "https://www.youtube.com/watch?v=hT_nvWreIhg", // Shut Up and Dance - WALK THE MOON
    "https://www.youtube.com/watch?v=ktvTqknDobU", // Roar - Katy Perry
    "https://www.youtube.com/watch?v=YQHsXMglC9A", // Hello - Adele (Happy version)
    "https://www.youtube.com/watch?v=AJtDXIazrMo", // Best Day of My Life - American Authors
    "https://www.youtube.com/watch?v=CevxZvSJLk8", // Happy Together - The Turtles
    "https://www.youtube.com/watch?v=7PCkvCPvDXk", // Walking on Sunshine - Katrina and the Waves
    "https://www.youtube.com/watch?v=3GwjfUFyY6M", // Don't Stop Believin' - Journey
  ];

  const madVideos = [
    "https://www.youtube.com/watch?v=3JcmQONgXJM", // Break Stuff - Limp Bizkit
    "https://www.youtube.com/watch?v=8SbUC-UaAxE", // Numb - Linkin Park
    "https://www.youtube.com/watch?v=5abamRO41fE", // Chop Suey! - System of a Down
    "https://www.youtube.com/watch?v=6fVE8kSM43I", // Bulls on Parade - Rage Against the Machine
    "https://www.youtube.com/watch?v=8-r-V0uK4u0", // Killing in the Name - Rage Against the Machine
    "https://www.youtube.com/watch?v=6Ejga4kJUts", // Down with the Sickness - Disturbed
    "https://www.youtube.com/watch?v=6fVE8kSM43I", // Bulls on Parade - Rage Against the Machine
    "https://www.youtube.com/watch?v=8SbUC-UaAxE", // Numb - Linkin Park
    "https://www.youtube.com/watch?v=3JcmQONgXJM", // Break Stuff - Limp Bizkit
    "https://www.youtube.com/watch?v=5abamRO41fE", // Chop Suey! - System of a Down
  ];

  const sadVideos = [
    "https://www.youtube.com/watch?v=YQHsXMglC9A", // Hello - Adele
    "https://www.youtube.com/watch?v=hT_nvWreIhg", // Someone Like You - Adele
    "https://www.youtube.com/watch?v=JGwWNGJdvx8", // Shape of You - Ed Sheeran (Sad version)
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g", // Perfect - Ed Sheeran
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g", // Perfect - Ed Sheeran
    "https://www.youtube.com/watch?v=YQHsXMglC9A", // Hello - Adele
    "https://www.youtube.com/watch?v=hT_nvWreIhg", // Someone Like You - Adele
    "https://www.youtube.com/watch?v=JGwWNGJdvx8", // Shape of You - Ed Sheeran (Sad version)
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g", // Perfect - Ed Sheeran
    "https://www.youtube.com/watch?v=2Vv-BfVoq4g", // Perfect - Ed Sheeran
  ];

  const [happyRoll, setHappyRoll] = useState(null);
  const [madRoll, setMadRoll] = useState(null);
  const [sadRoll, setSadRoll] = useState(null);

  const [happyAction, setHappyAction] = useState('');
  const [madAction, setMadAction] = useState('');
  const [sadAction, setSadAction] = useState('');

  const [isRolling, setIsRolling] = useState({ happy: false, mad: false, sad: false });

  const rollDice = (type) => {
    setIsRolling((prevState) => ({ ...prevState, [type]: true }));
    const roll = Math.floor(Math.random() * 10); // Random index for the video list

    if (type === "happy") {
      setHappyRoll(roll);
      setHappyAction("Watch a happy YouTube video");
      window.open(happyVideos[roll], '_blank'); // Open the YouTube link
    } else if (type === "mad") {
      setMadRoll(roll);
      setMadAction("Watch a mad YouTube video");
      window.open(madVideos[roll], '_blank'); // Open the YouTube link
    } else if (type === "sad") {
      setSadRoll(roll);
      setSadAction("Watch a sad YouTube video");
      window.open(sadVideos[roll], '_blank'); // Open the YouTube link
    }

    setTimeout(() => {
      setIsRolling((prevState) => ({ ...prevState, [type]: false }));
    }, 1000); // Reset the rolling state after the animation completes
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* Spline 3D Animation as Background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <Spline scene="https://prod.spline.design/0aj50JTrcxxmzvst/scene.splinecode" />
      </div>

      {/* Huge Title */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', zIndex: 2, textAlign: 'center', color: 'white', fontSize: '80px', fontWeight: 'bold' }}>
        MoodRoll
      </div>

      {/* Dice Rolling App UI */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2, textAlign: 'center', color: 'white' }}>
        <div className="container">
          <div className="dice-section" id="happy">
            <h2>Roll the Happy D10</h2>
            <button onClick={() => rollDice("happy")}>Roll</button>
            <div className="dice-container">
              {happyRoll !== null && (
                <div className={`dice ${isRolling.happy ? 'rolling' : ''}`}>
                  {happyRoll + 1}
                </div>
              )}
            </div>
            {happyAction && <p>Action: {happyAction}</p>}
          </div>

          <div className="dice-section" id="mad">
            <h2>Roll the Mad D10</h2>
            <button onClick={() => rollDice("mad")}>Roll</button>
            <div className="dice-container">
              {madRoll !== null && (
                <div className={`dice ${isRolling.mad ? 'rolling' : ''}`}>
                  {madRoll + 1}
                </div>
              )}
            </div>
            {madAction && <p>Action: {madAction}</p>}
          </div>

          <div className="dice-section" id="sad">
            <h2>Roll the Sad D10</h2>
            <button onClick={() => rollDice("sad")}>Roll</button>
            <div className="dice-container">
              {sadRoll !== null && (
                <div className={`dice ${isRolling.sad ? 'rolling' : ''}`}>
                  {sadRoll + 1}
                </div>
              )}
            </div>
            {sadAction && <p>Action: {sadAction}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
