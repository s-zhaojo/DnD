import logo from './logo.svg';
import './App.css';

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
    'https://www.offers.com/dominos-coupons/'
  ];

  // Function to randomly select a link
  const getRandomLink = () => {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to the Random Coupon website</h1>
        <p>
          Find great coupons for your favorite brands!
        </p>
        <a
          className="App-link"
          href={getRandomLink()} // Randomly generated link
          target="_blank"
          rel="noopener noreferrer"
        >
          Generate Coupon
        </a>
      </header>
    </div>
  );
}

export default App;
