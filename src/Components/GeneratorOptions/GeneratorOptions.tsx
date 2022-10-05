import React from "react";
import "./GeneratorOptions.css"

function GeneratorOptions() {
    return (
        <div className="generator-options">
            <div className="generator-options__length">
                <label htmlFor="length" className="generator-options__label">Character Length</label>
                <p className="generator-options__option generator-options__length-num">9</p>
                <input className="generator-options__input" type="range" id="length"></input>
            </div>
            <div className="generator-options__checkboxes">
                <div className="generator-options__option generator-options__upper-case">
                    <input className="generator-options__input" type="checkbox" id="upper-case"></input>
                    <label htmlFor="upper-case" className="generator-options__label">Include Uppercase Letters</label>
                </div>
                <div className="generator-options__option generator-options__lower-case">
                    <input className="generator-options__input" type="checkbox" id="lower-case"></input>
                    <label htmlFor="lower-case" className="generator-options__label">Include Lowercase Letters</label>
                </div>
                <div className="generator-options__option generator-options__numbers">
                    <input className="generator-options__input" type="checkbox" id="numbers"></input>
                    <label htmlFor="numbers" className="generator-options__label">Include Numbers</label>
                </div>
                <div className="generator-options__option generator-options__symbols">
                    <input className="generator-options__input" type="checkbox" id="symbols"></input>
                    <label htmlFor="symbols" className="generator-options__label">Include Symbols</label>
                </div>
            </div>
        </div>
    )
}

export default GeneratorOptions;