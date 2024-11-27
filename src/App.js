import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Importer axios

function App() {
  const [menu, setMenu] = useState([]); // Déclarer un état pour stocker le menu

  useEffect(() => {
    // Utilisation de axios pour récupérer les données du menu depuis l'API Spring Boot
    axios.get('http://localhost:8080/menu') // Requête GET vers l'API
      .then(response => {
        setMenu(response.data); // Si la requête est réussie, mettre à jour l'état avec les données du menu
      })
      .catch(error => {
        console.error("Il y a eu une erreur lors de la récupération du menu !", error);
      });
  }, []); // Le hook s'exécute une seule fois après le premier rendu du composant

  return (
    <div className="App">
      <h1>Menu Fast Food</h1>
      <ul>
        {menu.map((item, index) => (
          <li key={index}>{item}</li> // Afficher chaque élément du menu
        ))}
      </ul>
    </div>
  );
}

export default App;

