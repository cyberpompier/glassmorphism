import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import VehicleDetails from './VehicleDetails';
import Administration from './Administration';
import Materials from './Materials';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vehicle/:id" element={<VehicleDetails />} />
      <Route path="/administration" element={<Administration />} />
      <Route path="/materiels" element={<Materials />} />
    </Routes>
  );
}

export default App;
