import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { FaTimes } from 'react-icons/fa';

  function Administration() {
    const [showVehicleForm, setShowVehicleForm] = useState(false);
    const [vehicleDetails, setVehicleDetails] = useState({
      name: '',
      registration: '',
      type: '',
      station: '',
      photo: ''
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setVehicleDetails({ ...vehicleDetails, [name]: value });
    };

    const handleAddVehicle = () => {
      console.log('Adding vehicle:', vehicleDetails);
      setVehicleDetails({
        name: '',
        registration: '',
        type: '',
        station: '',
        photo: ''
      });
      setShowVehicleForm(false);
    };

    return (
      <div className="app">
        <div className="card">
          <FaTimes className="close-icon" onClick={() => navigate('/')} />
          <h2>Administration</h2>
          <div className="button-group">
            {!showVehicleForm && <button onClick={() => setShowVehicleForm(true)}>Véhicule</button>}
            {!showVehicleForm && <button>Matériel</button>}
          </div>
          {showVehicleForm && (
            <div className="form-group">
              <h3>Ajouter Véhicule</h3>
              <input
                type="text"
                name="name"
                value={vehicleDetails.name}
                onChange={handleInputChange}
                placeholder="Nom"
              />
              <input
                type="text"
                name="registration"
                value={vehicleDetails.registration}
                onChange={handleInputChange}
                placeholder="Immatriculation"
              />
              <select
                name="type"
                value={vehicleDetails.type}
                onChange={handleInputChange}
              >
                <option value="">Type</option>
                <option value="INCENDIE">INCENDIE</option>
                <option value="SANITAIRE">SANITAIRE</option>
                <option value="OPERATIONS DIVERSES">OPERATIONS DIVERSES</option>
              </select>
              <input
                type="text"
                name="station"
                value={vehicleDetails.station}
                onChange={handleInputChange}
                placeholder="Caserne"
              />
              <input
                type="text"
                name="photo"
                value={vehicleDetails.photo}
                onChange={handleInputChange}
                placeholder="Photo URL"
              />
              <button onClick={handleAddVehicle}>Ajouter Véhicule</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  export default Administration;
