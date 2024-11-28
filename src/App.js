import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage';
import Authentification from './pages/Authentification';
import PaymentPage from './pages/PayChoice';
import ConsumptionPlacePage from './pages/Place';
import MenuPage from './pages/Index';

function App() {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  // Simule un temps de chargement de 3 secondes
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 secondes
  }, []);

  return (
    <Router>
      <Routes>
        {/* Page de chargement qui dure 3 secondes */}
        <Route path="/" element={loading ? <LoadingPage /> : <Navigate to="/login" />} />
        
        {/* Page de login avec l'option de continuer sans s'identifier */}
        <Route path="/login" element={<Authentification setAuth={setAuth} />} />
        
        {/* Si l'utilisateur n'est pas authentifié, on redirige vers la page de login */}
        <Route path="/payment" element={auth ? <PaymentPage /> : <Navigate to="/login" />} />
        
        {/* Page de choix du lieu de consommation */}
        <Route path="/consumption-place" element={auth ? <ConsumptionPlacePage /> : <Navigate to="/login" />} />
        
        {/* Page des menus */}
        <Route path="/menu" element={auth ? <MenuPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;


