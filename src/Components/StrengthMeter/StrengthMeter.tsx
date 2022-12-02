import React from "react";
import "./StrengthMeter.css";

interface StrengthMeterProps {
    passwordStrength: string,
}

function StrengthMeter({ passwordStrength }: StrengthMeterProps) {
    return (
        <div className="strength-meter">
            <span className="strength-meter__text">Strength</span>
            <div className="strength-meter__meter">
                <span className="strength-meter__meter-text">{passwordStrength === "very-hard" ? "very hard" : passwordStrength}</span>
                <div className="strength-meter__display">
                    <span className={`strength-meter__bar strength-meter__bar-filled-${passwordStrength}`}/>
                    <span className={`strength-meter__bar strength-meter__bar-filled-${passwordStrength !== "easy" ? passwordStrength : "none" }`}/>
                    <span className={`strength-meter__bar strength-meter__bar-filled-${passwordStrength !== "easy" && passwordStrength !== "medium" ? passwordStrength : "none" }`}/>
                    <span className={`strength-meter__bar strength-meter__bar-filled-${passwordStrength !== "easy" && passwordStrength !== "medium" && passwordStrength !== "hard" ? passwordStrength : "none" }`}/>
                </div>
            </div>
        </div>
    );
};

export default StrengthMeter;