import React from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function Authentification({ setAuth }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simuler l'authentification
    setAuth(true);
    navigate('/payment');  // Rediriger vers la page de paiement après connexion
  };

  const handleSkip = () => {
    // Si l'utilisateur choisit de continuer sans se connecter
    setAuth(false);
    navigate('/payment');
  };
    return (
        <div className="authPage">
            <img className="authPage__logo" src={logo} alt="logo Pizza Planet"></img>
            <h1 className="authPage__h1">Voulez-vous vous identifier ?</h1>
            <h2>Accédez à vos commandes favorites et cumulez des points de fidélité.</h2>
            <div className="authButtons">
                <button onClick={handleLogin} className="authButtons__btn">S'identifier</button>
                <button onClick={handleSkip} className="authButtons__btn">Continuer sans s'identifier</button>
            </div>
            <NavLink to="" className="link">Créer un compte</NavLink>
        </div>
    )
}
export default Authentification;