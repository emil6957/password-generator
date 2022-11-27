import React from "react";
import "./StrengthMeter.css";

function StrengthMeter({strengthText}: {strengthText: string}) {
    return (
        <div className="strength-meter">
            <span className="strength-meter__text">Strength</span>
            <div className="strength-meter__meter">
                <span className="strength-meter__meter-text">{strengthText}</span>
                <div className="strength-meter__display">
                    <span className="strength-meter__bar strength-meter__bar-filled-medium"/>
                    <span className="strength-meter__bar"/>
                    <span className="strength-meter__bar"/>
                    <span className="strength-meter__bar"/>
                </div>
            </div>
        </div>
    )
}

export default StrengthMeter;