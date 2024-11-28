import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Authentification from "./pages/Authentification";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentification />} />
      </Routes>
    </Router>
  );
};

export default App;

