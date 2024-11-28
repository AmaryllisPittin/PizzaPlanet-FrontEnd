import React from "react";
import logo from "../img/logo.png";

const Place = () => {
    return (
        <div className="authPage">
            <img className="authPage__logo" src={logo} alt="logo Pizza Planet"></img>
            <h1 className="authPage__h1">Où souhaitez-vous consommer ?</h1>
            <div className="authButtons">
                <button className="authButtons__btn">
                    Sur place
                </button>
                <button className="authButtons__btn">
                    A emporter</button>
            </div>
        </div>
    )
}
export default Place;