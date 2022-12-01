import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import GeneratorOptions from "../GeneratorOptions";

test("Character Length number and slider value are synced", () => {
    const updateOptions = jest.fn();
    const updatePasswordLength = jest.fn();
    render(<GeneratorOptions passwordLength={10} updatePasswordLength={updatePasswordLength} updateOptions={updateOptions}/>);
    const slider = screen.getByRole("slider");
    const charLength = screen.getByText("10");

    fireEvent.change(slider, { target: { value: 15 }});
    expect(charLength).toHaveTextContent("15");

    fireEvent.change(slider, { target: { value: 8 }});
    expect(charLength).toHaveTextContent("8");
});

test("Checkboxes are checked as they are clicked", () => {
    const updateOptions = jest.fn();
    const updatePasswordLength = jest.fn();
    render(<GeneratorOptions passwordLength={10} updatePasswordLength={updatePasswordLength} updateOptions={updateOptions} />);
    const checkbox = screen.getByLabelText("Include Uppercase Letters");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
});
