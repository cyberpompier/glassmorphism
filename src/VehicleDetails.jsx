import React from 'react';
  import { useParams, useNavigate } from 'react-router-dom';

  function VehicleDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Exemple de données de véhicule
    const vehicleData = {
      'Car 1': {
        photo: 'https://via.placeholder.com/150',
        name: 'Car 1',
        registration: 'ABC-123',
        type: 'Sedan'
      },
      'Car 2': {
        photo: 'https://via.placeholder.com/150',
        name: 'Car 2',
        registration: 'XYZ-456',
        type: 'SUV'
      },
      'Car 3': {
        photo: 'https://via.placeholder.com/150',
        name: 'Car 3',
        registration: 'LMN-789',
        type: 'Truck'
      }
    };

    const vehicle = vehicleData[id];

    return (
      <div className="app">
        <div className="card">
          <img src={vehicle.photo} alt={vehicle.name} className="vehicle-photo" />
          <h2>{vehicle.name}</h2>
          <p><strong>Immatriculation:</strong> {vehicle.registration}</p>
          <p><strong>Type:</strong> {vehicle.type}</p>
          <button onClick={() => navigate(-1)}>Retour</button>
        </div>
      </div>
    );
  }

  export default VehicleDetails;
