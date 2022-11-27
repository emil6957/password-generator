import React from "react";
import "./GenerateButton.css";
import rightArrow from "../../Imgs/right-arrow.svg";

function GenerateButton() {
    return (
        <div className="generate-button">
            <button className="generate-button__btn">
                <span className="generate-button__btn-text">Generate</span>
                <img className="generate-button__btn-img" src={rightArrow} alt="right arrow" />
            </button>
        </div>
    )
}

export default GenerateButton;