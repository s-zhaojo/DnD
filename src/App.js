import './App.css';
import { useState, useEffect } from 'react';

function App() {
  // List of possible actions for each mood (happy, sad, mad)
  const happyActions = [
    'Showing you happy news from around the world!',
    'Sending you a free coupon!',
    'Playing happy music for you!'
  ];

  const sadActions = [
    'Sending you a motivational quote.',
    'Redirecting to a support group.',
    'Playing sad music for you.'
  ];

  const madActions = [
    'Sending you a funny video to cheer you up!',
    'Redirecting to a therapy website.',
    'Redirecting to a place to rant your emotions.'
  ];

  // Mapping moods to actions
  const actionsByMood = {
    happy: happyActions,
    sad: sadActions,
    mad: madActions,
  };

  const [speechResult, setSpeechResult] = useState('');
  const [mood, setMood] = useState('');
  const [action, setAction] = useState('');
  const [isRolling, setIsRolling] = useState(false);

  // Initialize speech recognition
  const recognition = new window.SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  // Function to start recording the voice
  const startVoiceRecording = () => {
    setSpeechResult('');
    setMood('');
    recognition.start();
  };

  // Function to analyze the transcript for mood
  const analyzeMood = (transcript) => {
    const lowerTranscript = transcript.toLowerCase();

    // Basic keyword-based mood detection
    if (lowerTranscript.includes('happy') || lowerTranscript.includes('joy') || lowerTranscript.includes('excited')) {
      setMood('happy');
    } else if (lowerTranscript.includes('sad') || lowerTranscript.includes('down') || lowerTranscript.includes('depressed')) {
      setMood('sad');
    } else if (lowerTranscript.includes('angry') || lowerTranscript.includes('frustrated') || lowerTranscript.includes('mad')) {
      setMood('mad');
    } else {
      setMood('neutral');
    }
  };

  // Function to roll a mood-based dice
  const rollMoodDice = (mood) => {
    setIsRolling(true);

    // Wait a second to simulate rolling the dice
    setTimeout(() => {
      const actions = actionsByMood[mood];
      const roll = Math.floor(Math.random() * actions.length); // Random roll between 0 and number of actions
      setAction(actions[roll]); // Set action based on the roll
      setIsRolling(false);
    }, 1000);
  };

  // Speech recognition callback
  useEffect(() => {
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSpeechResult(transcript);
      analyzeMood(transcript);
    };

    recognition.onspeechend = () => {
      if (mood !== 'neutral') {
        rollMoodDice(mood); // Roll the dice based on the detected mood
      } else {
        setAction("Mood not detected. Try saying happy, sad, or mad.");
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error", event);
      setAction('Error detecting speech.');
    };
  }, [mood]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Voice Mood Roller</h1>
        <p>Speak your feelings, and I'll roll the dice based on your mood!</p>

        {/* Button to start voice recording */}
        <div>
          <button onClick={startVoiceRecording}>Start Talking</button>
        </div>

        {/* Speech Result Display */}
        {speechResult && (
          <div className="speech-result">
            <p>You said: "{speechResult}"</p>
          </div>
        )}

        {/* Mood Display */}
        {mood && (
          <div className="mood">
            <p>Your detected mood: {mood}</p>
          </div>
        )}

        {/* Dice Roll Action Display */}
        {isRolling ? (
          <div>Rolling your mood dice...</div>
        ) : (
          action && (
            <div className="action">
              <p>{action}</p>
            </div>
          )
        )}
      </header>
    </div>
  );
}

export default App;
