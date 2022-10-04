import React from "react";

function GeneratorOptions() {
    return (
        <div className="generator-options">
            <div className="generator-options__length">
                <label htmlFor="length" className="generator-options__label">Character Length</label>
                <p>9</p>
                <input className="generator-options__input" type="range" id="length"></input>
            </div>
            <div className="generator-options__upper-case">
                <label htmlFor="upper-case" className="generator-options__label">Include Uppercase Letters</label>
                <input className="generator-options__input" type="checkbox" id="upper-case"></input>
            </div>
            <div className="generator-options__lower-case">
                <label htmlFor="lower-case" className="generator-options__label">Include Lowercase Letters</label>
                <input className="generator-options__input" type="checkbox" id="lower-case"></input>
            </div>
            <div className="generator-options__numbers">
                <label htmlFor="numbers" className="generator-options__label">Include Numbers</label>
                <input className="generator-options__input" type="checkbox" id="numbers"></input>
            </div>
            <div className="generator-options__symbols">
                <label htmlFor="numbers" className="generator-options__label">Include Symbols</label>
                <input className="generator-options__input" type="checkbox" id="symbols"></input>
            </div>
        </div>
    )
}

export default GeneratorOptions;