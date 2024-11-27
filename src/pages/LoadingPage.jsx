import React from "react";
import banner from "../img/banner.png";
import logo from "../img/logo.png";

const LoadingPage = () => {
    return (
        <div className="loadingPage">
            <img className="loadingPage__img" src={banner} alt="arrière plan d'une pizza d'excellence"></img>
            <img className="loadingPage__logo" src={logo} alt="logo Pizza Planet"></img>
        </div>
    )
}
export default LoadingPage;