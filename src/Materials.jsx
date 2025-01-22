import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Materials = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [filters, setFilters] = useState({
    vehicule: '',
    emplacement: ''
  });

  // Données de démonstration
  const materials = [
    {
      id: 1,
      photo: 'https://via.placeholder.com/100',
      nom: 'Extincteur',
      quantite: 5,
      vehicule: 'Véhicule 1',
      emplacement: 'Cabine AV',
      fiche: '/materiel/1'
    },
    {
      id: 2,
      photo: 'https://via.placeholder.com/100',
      nom: 'Trousse de secours',
      quantite: 2,
      vehicule: 'Véhicule 2',
      emplacement: 'Coffre AR droit',
      fiche: '/materiel/2'
    },
    // Ajouter plus d'éléments ici
  ];

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const sortedMaterials = [...materials].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
    }
    return 0;
  });

  const filteredMaterials = sortedMaterials.filter(material => {
    return (
      material.vehicule.toLowerCase().includes(filters.vehicule.toLowerCase()) &&
      material.emplacement.toLowerCase().includes(filters.emplacement.toLowerCase())
    );
  });

  return (
    <div className="app">
      <div className="card">
        <h1>Gestion du Matériel</h1>

        <div className="filters">
          <input
            type="text"
            name="vehicule"
            placeholder="Filtrer par véhicule"
            value={filters.vehicule}
            onChange={handleFilterChange}
          />
          <input
            type="text"
            name="emplacement"
            placeholder="Filtrer par emplacement"
            value={filters.emplacement}
            onChange={handleFilterChange}
          />
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Photo</th>
                <th onClick={() => handleSort('nom')}>
                  Nom {sortConfig.key === 'nom' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>
                <th onClick={() => handleSort('quantite')}>
                  Quantité {sortConfig.key === 'quantite' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>
                <th onClick={() => handleSort('vehicule')}>
                  Véhicule {sortConfig.key === 'vehicule' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>
                <th onClick={() => handleSort('emplacement')}>
                  Emplacement {sortConfig.key === 'emplacement' && (sortConfig.direction === 'asc' ? '▲' : '▼')}
                </th>
                <th>Fiche</th>
              </tr>
            </thead>
            <tbody>
              {filteredMaterials.map(material => (
                <tr key={material.id}>
                  <td>
                    <img 
                      src={material.photo} 
                      alt={material.nom} 
                      className="material-thumbnail" 
                    />
                  </td>
                  <td>{material.nom}</td>
                  <td>{material.quantite}</td>
                  <td>{material.vehicule}</td>
                  <td>{material.emplacement}</td>
                  <td>
                    <Link to={material.fiche} className="detail-link">
                      Voir la fiche
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link to="/" className="back-button">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default Materials;
