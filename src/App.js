import logo from './coupon.svg';
import './App.css';
import { useState } from 'react'; // Import the useState hook

function App() {
  // List of possible links
  const links = [
    'https://www.dominos.com/en/pages/order/coupon#!/coupon/national/',
    'https://www.panerabread.com/en-us/panera-promo-codes-discount-coupons-deals.html',
    'https://www.couponcabin.com/coupons/dominos/',
    'https://www.retailmenot.com/view/dominos.com',
    'https://www.groupon.com/coupons/stores/dominos.com',
    'https://www.ebates.com/coupons/dominos.com',
    'https://www.discountcoupons.com/store/dominos-coupons',
    'https://www.slickdeals.net/coupons/dominos/',
    'https://www.valpak.com/coupons/get/dominos-coupons',
    'https://www.offers.com/dominos-coupons/',
    'https://www.coupons.com/printable'
  ];

  // useState hook to store the current coupon link and dice roll result
  const [currentLink, setCurrentLink] = useState(links[0]); // Default to the first link
  const [diceRoll, setDiceRoll] = useState(null); // State to store the dice roll result

  // Function to randomly select a link
  const getRandomLink = () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
  };

  // Function to roll the dice (1 to 12)
  const rollDice = () => {
    const roll = Math.floor(Math.random() * 12) + 1; // Random number between 1 and 12
    setDiceRoll(roll); // Set the dice roll result to state
  };

  // Handle the click event for the coupon link
  const handleClick = () => {
    const newLink = getRandomLink();  // Get a new random link
    setCurrentLink(newLink);          // Update the state with the new link
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Roll the D12</h1>
        <p>Find great coupons for your favorite brands!</p>
        
        {/* Dice Roll Display */}
        <div>
          <p>Dice Roll Result: {diceRoll ? diceRoll : 'Not rolled yet'}</p>
          <button onClick={rollDice}>Roll Dice</button>
        </div>

        {/* Coupon Link Section */}
        <a
          className="App-link"
          href={currentLink} // Use the state for the link
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick} // Update the link when clicked
        >
          Generate Coupon
        </a>
      </header>
    </div>
  );
}

export default App;
