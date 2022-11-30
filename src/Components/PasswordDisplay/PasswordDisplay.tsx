import React from "react";
import "./PasswordDisplay.css";
import copy from "../../Imgs/copy.svg";

interface PasswordDisplayProps {
    password: string,
};

function PasswordDisplay({ password }: PasswordDisplayProps) {
    function copyClipboard(text: string) {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="password-display">
            <input className="password-display__text" type="text" value={password} placeholder="Password123!" disabled />
            <button className="password-display__copy-btn" onClick={() => copyClipboard(password)}><img className="password-display__copy-img" src={copy} /></button>
        </div>
    );
};

export default PasswordDisplay;