import React from "react";
import "./PasswordGenerator.css"
import PasswordDisplay from "../PasswordDisplay/PasswordDisplay";
import PasswordGeneratorBottom from "../PasswordGeneratorBottom/PasswordGeneratorBottom";

function PasswordGenerator() {
    return (
        <div className="password-generator">
            <PasswordDisplay password={"placeholder"} />
            <PasswordGeneratorBottom />
        </div>
    )
};

export default PasswordGenerator;