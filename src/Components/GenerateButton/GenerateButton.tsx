import React from "react";
import "./GenerateButton.css";
import rightArrow from "../../Imgs/right-arrow.svg";
import Options from "../../Interfaces/Options";

interface GenerateButtonProps {
    generatePassword: Function,
    options: Options,
};

function GenerateButton({ generatePassword, options }: GenerateButtonProps) {
    return (
        <div className="generate-button">
            <button className="generate-button__btn" onClick={() => generatePassword()}>
                <span className="generate-button__btn-text">Generate</span>
                <img className="generate-button__btn-img" src={rightArrow} alt="right arrow" />
            </button>
        </div>
    );
};

export default GenerateButton;