import React from 'react';
  import { useNavigate } from 'react-router-dom';

  function VehiclePopup({ onClose }) {
    const vehicles = ['Car 1', 'Car 2', 'Car 3'];
    const navigate = useNavigate();

    const handleSelect = (vehicle) => {
      navigate(`/vehicle/${vehicle}`);
      onClose();
    };

    return (
      <div className="popup">
        <div className="popup-content">
          <h2>Available Vehicles</h2>
          <ul>
            {vehicles.map((vehicle, index) => (
              <li key={index} onClick={() => handleSelect(vehicle)}>{vehicle}</li>
            ))}
          </ul>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }

  export default VehiclePopup;
