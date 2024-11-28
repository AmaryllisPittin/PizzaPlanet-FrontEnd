import React from "react";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

const Authentification = () => {
    return (
        <div className="authPage">
            <img className="authPage__logo" src={logo} alt="logo Pizza Planet"></img>
            <h1 className="authPage__h1">Voulez-vous vous identifier ?</h1>
            <h2>Accédez à vos commandes favorites et cumulez des points de fidélité.</h2>
            <div className="authButtons">
                <button className="authButtons__btn">S'identifier</button>
                <button className="authButtons__btn">Continuer sans s'identifier</button>
            </div>
            <NavLink to="" className="link">Créer un compte</NavLink>
        </div>
    )
}
export default Authentification;