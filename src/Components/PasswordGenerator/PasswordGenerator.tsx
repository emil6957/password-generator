import React from "react";
import GenerateButton from "../GenerateButton/GenerateButton";
import GeneratorOptions from "../GeneratorOptions/GeneratorOptions";
import PasswordDisplay from "../PasswordDisplay/PasswordDisplay";
import StrengthMeter from "../StrengthMeter/StrengthMeter";

function PasswordGenerator() {
    return (
        <div className="password-generator">
            <PasswordDisplay password={"placeholder"} />
            <GeneratorOptions />
            <StrengthMeter strengthText={"placeholder"} />
            <GenerateButton />
        </div>
    )
};

export default PasswordGenerator;