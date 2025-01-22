import React, { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { FaTimes } from 'react-icons/fa';

  function Administration() {
    const [showVehicleForm, setShowVehicleForm] = useState(false);
    const [showMaterialForm, setShowMaterialForm] = useState(false);
    const [vehicleType, setVehicleType] = useState('');
    const navigate = useNavigate();

    const handleAddVehicle = () => {
      console.log('Adding vehicle');
      setShowVehicleForm(false);
    };

    const handleAddMaterial = () => {
      console.log('Adding material');
      setShowMaterialForm(false);
    };

    const getMaterialLocations = () => {
      if (vehicleType === 'Sanitaire') {
        return [
          'Cabine AV', 'coffre lateral gauche', 'coffre lateral droit',
          'cellule AR gauche', 'cellule centrale gauche', 'Cellule AV gauche',
          'Tiroir', 'Cellule AV', 'Cellule centrale Droite', 'Cellule AR droite'
        ];
      } else if (vehicleType === 'Incendie') {
        return [
          'Cabine AV', 'Cabine AR', 'Coffre AV gauche', 'Coffre millieu gauche',
          'Coffre AR gauche', 'Coffre AV droit', 'Coffre millieu droit',
          'Coffre AR droit', 'Rideau AR', 'Toit'
        ];
      }
      return [];
    };

    return (
      <div className="popup">
        <div className="popup-content">
          <FaTimes className="close-icon" onClick={() => navigate(-1)} />
          <h2>Administration</h2>
          {!showVehicleForm && !showMaterialForm && (
            <div className="button-group">
              <button onClick={() => setShowVehicleForm(true)}>Add Vehicle</button>
              <button onClick={() => setShowMaterialForm(true)}>Add Material</button>
            </div>
          )}
          {showVehicleForm && (
            <div className="form-group">
              <h3>Add Vehicle</h3>
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Immatriculation" />
              <input type="text" placeholder="Caserne" />
              <select onChange={(e) => setVehicleType(e.target.value)}>
                <option value="">Type</option>
                <option value="Incendie">Incendie</option>
                <option value="Sanitaire">Sanitaire</option>
                <option value="Operation Div.">Operation Div.</option>
              </select>
              <input type="text" placeholder="Photo URL" />
              <button onClick={handleAddVehicle}>Confirm Add Vehicle</button>
            </div>
          )}
          {showMaterialForm && (
            <div className="form-group">
              <h3>Add Material</h3>
              <input type="text" placeholder="Nom" />
              <input type="text" placeholder="Quantitee" />
              <input type="text" placeholder="Vehicule d'affectation" />
              <select>
                <option value="">Emplacement</option>
                {getMaterialLocations().map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
              <input type="text" placeholder="Lien vers un document ou media" />
              <input type="text" placeholder="Photo URL" />
              <button onClick={handleAddMaterial}>Confirm Add Material</button>
            </div>
          )}
        </div>
      </div>
    );
  }

  export default Administration;
