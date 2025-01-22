import React, { useState } from 'react';
  import { FaUserCircle } from 'react-icons/fa';
  import { Link } from 'react-router-dom';
  import VehiclePopup from './VehiclePopup';

  function Home() {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
      setShowPopup(!showPopup);
    };

    return (
      <div className="app">
        <nav className="navbar">
          <ul>
            <li><a href="#vehicules" onClick={togglePopup}>VEHICULES</a></li>
            <li><a href="#materiels">MATERIELS</a></li>
            <li><a href="#verifications">VERIFICATIONS</a></li>
            <li><Link to="/administration">ADMINISTRATION</Link></li>
          </ul>
          <FaUserCircle className="login-icon" />
        </nav>
        <header className="header">
          <h1>Build your business with digital payment</h1>
          <p>Carrying forward the tradition of cashless and digitalization...</p>
          <button>Get Started</button>
        </header>
        <div className="card">
          <h2>Your Cards</h2>
          <p>Balance: $24,098.00</p>
          <p>Recent Transactions: McDonald's, Amazon</p>
        </div>
        {showPopup && <VehiclePopup onClose={togglePopup} />}
      </div>
    );
  }

  export default Home;
