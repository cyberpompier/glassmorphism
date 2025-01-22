import React from 'react';
  import { Routes, Route } from 'react-router-dom';
  import Home from './Home';
  import VehicleDetails from './VehicleDetails';
  import Administration from './Administration';

  function App() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
        <Route path="/administration" element={<Administration />} />
      </Routes>
    );
  }

  export default App;
