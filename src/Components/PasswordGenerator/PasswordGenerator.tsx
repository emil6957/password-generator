import React, { useState } from "react";
import "./PasswordGenerator.css"
import Options from "../../Interfaces/Options";
import PasswordDisplay from "../PasswordDisplay/PasswordDisplay";
import PasswordGeneratorBottom from "../PasswordGeneratorBottom/PasswordGeneratorBottom";

function PasswordGenerator() {
    const [password, setPassword] = useState<string>("");
    const [options, setOptions] = useState<Options>({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    function generatePassword(): void {
    };

    function updateOptions(option: string): void {
    };

    return (
        <div className="password-generator">
            <h1 className="password-generator__header">Password Generator</h1>
            <PasswordDisplay password={password} />
            <PasswordGeneratorBottom options={options} updateOptions={updateOptions} generatePassword={generatePassword} />
        </div>
    );
};

export default PasswordGenerator;