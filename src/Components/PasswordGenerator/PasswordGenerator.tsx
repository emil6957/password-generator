import React, { useState } from "react";
import "./PasswordGenerator.css"
import Options from "../../Interfaces/Options";
import PasswordDisplay from "../PasswordDisplay/PasswordDisplay";
import PasswordGeneratorBottom from "../PasswordGeneratorBottom/PasswordGeneratorBottom";

function PasswordGenerator() {
    const [password, setPassword] = useState<string>("");
    const [passwordLength, setPasswordLength]: [number, Function] = useState(10);
    const [options, setOptions] = useState<Options>({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    function updatePasswordLength(e: SyntheticEvent): void {
        const target = e.target as typeof e.target & {
            value: { value: number };
        };
        setPasswordLength(target.value);
    };

    function generatePassword(): void {
    };

    function updateOptions(option: string): void {
        if(option === "uppercase") {
            setOptions((prevOptions) => {
                return {
                    ...prevOptions,
                    uppercase: !prevOptions.uppercase,
                };
            });
        };

        if(option === "lowercase") {
            setOptions((prevOptions) => {
                return {
                    ...prevOptions,
                    lowercase: !prevOptions.lowercase,
                };
            });
        };
        
        if(option === "numbers") {
            setOptions((prevOptions) => {
                return {
                    ...prevOptions,
                    numbers: !prevOptions.numbers,
                };
            });
        };

        if(option === "symbols") {
            setOptions((prevOptions) => {
                return {
                    ...prevOptions,
                    symbols: !prevOptions.symbols,
                };
            });
        };
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