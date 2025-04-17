import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Recherche from './pages/Recherche';
import FichePrestataire from './pages/FichePrestataire';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/fiche-prestataire" element={<FichePrestataire />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
