import React from "react";
import "./PasswordGeneratorBottom.css";
import GeneratorOptions from "../GeneratorOptions/GeneratorOptions";
import StrengthMeter from "../StrengthMeter/StrengthMeter";
import GenerateButton from "../GenerateButton/GenerateButton";
import Options from "../../Interfaces/Options";

interface PasswordGeneratorBottomProps {
    generatePassword: Function,
    options: Options,
    updateOptions: Function,
}

function PasswordGeneratorBottom({ generatePassword, options, updateOptions }: PasswordGeneratorBottomProps) {
    return (
        <div className="password-generator-bottom">
            <GeneratorOptions updateOptions={updateOptions} />
            <StrengthMeter strengthText="placeholder" />
            <GenerateButton options={options} generatePassword={generatePassword} />
        </div>
    );
};

export default PasswordGeneratorBottom;