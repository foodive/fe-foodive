import React from "react";
import "../Styles/global.scss";
import logoPin from "../assets/logo_pin.svg"; 
import logoPlate from "../assets/logo_plate.svg";

const Loading = () => {
    return (
        <main>
            <div className="loading-container">
                <img className="loading-pin rotate-y" src={logoPin} alt="Spinning Pin"/>
                <img className="loading-plate" src={logoPlate} alt="Plate"/>
            </div>
        </main>
    );
}

export default Loading;