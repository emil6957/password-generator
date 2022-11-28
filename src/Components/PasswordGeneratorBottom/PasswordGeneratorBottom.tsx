import React from "react";
import "./PasswordGeneratorBottom.css";
import GeneratorOptions from "../GeneratorOptions/GeneratorOptions";
import StrengthMeter from "../StrengthMeter/StrengthMeter";
import GenerateButton from "../GenerateButton/GenerateButton";

function PasswordGeneratorBottom() {
    return (
        <div className="password-generator-bottom">
            <GeneratorOptions />
            <StrengthMeter strengthText="placeholder" />
            <GenerateButton />
        </div>
    );
}

export default PasswordGeneratorBottom;