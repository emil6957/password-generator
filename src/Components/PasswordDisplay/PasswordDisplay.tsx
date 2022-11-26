import React from "react";
import "./PasswordDisplay.css";
import copy from "../../Imgs/copy.svg";

function PasswordDisplay({ password }: { password: string }) {
    function copyClipboard(text: string) {
        navigator.clipboard.writeText(text);
    }

    return (
        <div className="password-display">
            <p className="password-display__text">{password}</p>
            <button className="password-display__copy-btn" onClick={() => copyClipboard(password)}><img className="password-display__copy-img" src={copy} /></button>
        </div>
    )
}

export default PasswordDisplay;