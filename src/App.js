import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";



const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
      </Routes>
    </Router>
  );
};

export default App;

