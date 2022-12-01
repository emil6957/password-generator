import React from "react";
import "./PasswordGeneratorBottom.css";
import GeneratorOptions from "../GeneratorOptions/GeneratorOptions";
import StrengthMeter from "../StrengthMeter/StrengthMeter";
import GenerateButton from "../GenerateButton/GenerateButton";
import Options from "../../Interfaces/Options";

interface PasswordGeneratorBottomProps {
    generatePassword: Function,
    passwordLength: number,
    updatePasswordLength: Function,
    options: Options,
    updateOptions: Function,
}

function PasswordGeneratorBottom({ generatePassword, passwordLength, updatePasswordLength, options, updateOptions }: PasswordGeneratorBottomProps) {
    return (
        <div className="password-generator-bottom">
            <GeneratorOptions passwordLength={passwordLength} updatePasswordLength={updatePasswordLength} updateOptions={updateOptions} />
            <StrengthMeter strengthText="placeholder" />
            <GenerateButton options={options} generatePassword={generatePassword} />
        </div>
    );
};

export default PasswordGeneratorBottom;