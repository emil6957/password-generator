import React, { SyntheticEvent, useState } from "react";
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
    const [passwordStrength, setPasswordStrength] = useState<string>("easy");

    function updatePasswordStrength(): void {
        let optionsSelected: number = 0;
        optionsSelected += options.lowercase === true ? 1 : 0;
        optionsSelected += options.uppercase === true ? 1 : 0;
        optionsSelected += options.numbers === true ? 1 : 0;
        optionsSelected += options.symbols === true ? 1 : 0;

        if(optionsSelected === 1) {
            if(passwordLength <= 8) {
                setPasswordStrength("easy");
            } else {
                setPasswordStrength("medium");
            };
        };

        if(optionsSelected === 2) {
            if(passwordLength <= 6) {
                setPasswordStrength("easy");
            } else if(passwordLength <= 8) {
                setPasswordStrength("medium");
            } else {
                setPasswordStrength("hard");
            };
        };

        if(optionsSelected === 3) {
            if(passwordLength <= 6) {
                setPasswordStrength("medium");
            } else if(passwordLength <= 8) {
                setPasswordStrength("hard");
            } else {
                setPasswordStrength("very-hard");
            };
        };

        if(optionsSelected === 4) {
            if(passwordLength <= 6) {
                setPasswordStrength("hard");
            } else {
                setPasswordStrength("very-hard");
            };
        };
    }

    function updatePasswordLength(e: SyntheticEvent): void {
        const target = e.target as typeof e.target & {
            value: { value: number };
        };
        setPasswordLength(target.value);
    };

    function passwordTest(password: string): boolean {
        if(options.lowercase === true) {
            if(!password.match(/[a-z]/)) {
                return false;
            };
        };

        if(options.uppercase === true) {
            if(!password.match(/[A-Z]/)) {
                return false;
            };
        };

        if(options.numbers === true) {
            if(!password.match(/[0-9]/)) {
                return false;
            };
        };

        if(options.symbols === true) {
            if(!password.match(/[\W\S_]/)) {
                return false;
            };
        };

        return true;
    }

    function generatePassword(): void {
        let newPassword: string = "";
        let characters: string = "";
        const lowercaseChars: string = "abcdefghijklmnopqrstuvwxyz";
        const uppercaseChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numbers: string = "0123456789";
        const symbols: string = "!\"£$%^&*()_+`-=[]{};'#:@~,./<>?";

        if(options.lowercase === true) {
            characters += lowercaseChars;
        };

        if(options.uppercase === true) {
            characters += uppercaseChars;
        };

        if(options.numbers === true) {
            characters += numbers;
        };

        if(options.symbols === true) {
            characters += symbols;
        };

        if(characters.length === 0) {
            return;
        };

        for(let i = 0; i < passwordLength; i++) {
            newPassword += characters.charAt(Math.floor(Math.random() * characters.length));
        };

        if(passwordTest(newPassword) === true) {
            setPassword(newPassword);
        } else {
            generatePassword();
        };

        updatePasswordStrength();
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
            <PasswordGeneratorBottom passwordStrength={passwordStrength} passwordLength={passwordLength} updatePasswordLength={updatePasswordLength} options={options} updateOptions={updateOptions} generatePassword={generatePassword} />
        </div>
    );
};

export default PasswordGenerator;