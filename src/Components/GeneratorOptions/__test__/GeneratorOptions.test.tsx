import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import GeneratorOptions from "../GeneratorOptions";

test("function to sync slider value and display value is called on slider value changing", () => {
    const updateOptions = jest.fn();
    const updatePasswordLength = jest.fn();
    render(<GeneratorOptions passwordLength={10} updatePasswordLength={updatePasswordLength} updateOptions={updateOptions}/>);
    const slider = screen.getByRole("slider");

    fireEvent.change(slider, { target: { value: 15 }});
    expect(updatePasswordLength).toBeCalled();
});

test("Checkboxes are checked as they are clicked", () => {
    const updateOptions = jest.fn();
    const updatePasswordLength = jest.fn();
    render(<GeneratorOptions passwordLength={10} updatePasswordLength={updatePasswordLength} updateOptions={updateOptions} />);
    const checkbox = screen.getByLabelText("Include Uppercase Letters");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
});
