import React from "react";
import logo from "../img/logo.png";
import { useNavigate } from 'react-router-dom';

function PayChoice() {
  const navigate = useNavigate();

  const handlePayment = (method) => {
    console.log(`Paiement effectué avec : ${method}`);
    navigate('/consumption-place');  // Rediriger vers la page du lieu de consommation après le choix du paiement
  };

    return (
        <div className="authPage">
            <img className="authPage__logo" src={logo} alt="logo Pizza Planet"></img>
            <h1 className="authPage__h1">Comment souhaitez-vous régler ?</h1>
            <div className="authButtons">
                <button onClick={() => handlePayment('Carte bancaire')} className="authButtons__btn">
                    Par carte bancaire (à la borne)
                </button>
                <button onClick={() => handlePayment('Espèces')} className="authButtons__btn">
                    En espèce / tickets restos (au comptoir)</button>
            </div>
        </div>
    )
}
export default PayChoice;