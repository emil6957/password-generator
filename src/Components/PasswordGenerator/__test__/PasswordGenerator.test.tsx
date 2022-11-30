import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import PasswordGenerator from "../PasswordGenerator";

describe("Testing each checkbox generating password individually", () => {
    test("password is not generated when none of the checkboxes are checked", () => {
        render(<PasswordGenerator />);
        const password = screen.getByPlaceholderText("Password123!");
        const checkboxes = screen.getAllByRole("checkbox");
        checkboxes.forEach((checkbox) => {
            expect(checkbox).not.toBeChecked();
        })

        const generateButton = screen.getByRole("button", { name: /generate/i });
        fireEvent.click(generateButton);
        
        expect(password).toHaveValue("");
    });

    test("new passwords are generated with lowercase option on containing only lowercase", () => {
        render(<PasswordGenerator />);
        const password = screen.getByPlaceholderText("Password123!");
        const lowercaseCheckbox = screen.getByLabelText("Include Lowercase Letters");
        fireEvent.click(lowercaseCheckbox)
        expect(lowercaseCheckbox).toBeChecked();

        const generateButton = screen.getByRole("button", { name: /generate/i });
        fireEvent.click(generateButton);

        expect(password).toMatch(/[a-z]/);
    });

    test("new passwords are generated with uppercase option on containing only uppercase", () => {
        render(<PasswordGenerator />);
        const password = screen.getByPlaceholderText("Password123!");
        const uppercaseCheckbox = screen.getByLabelText("Include Uppercase Letters");
        fireEvent.click(uppercaseCheckbox)
        expect(uppercaseCheckbox).toBeChecked();

        const generateButton = screen.getByRole("button", { name: /generate/i });
        fireEvent.click(generateButton);

        expect(password).toMatch(/[A-Z]/);
    });

    test("new passwords are generated with numbers option on containing only numbers", () => {
        render(<PasswordGenerator />);
        const password = screen.getByPlaceholderText("Password123!");
        const numbersCheckbox = screen.getByLabelText("Include Numbers");
        fireEvent.click(numbersCheckbox)
        expect(numbersCheckbox).toBeChecked();

        const generateButton = screen.getByRole("button", { name: /generate/i });
        fireEvent.click(generateButton);

        expect(password).toMatch(/[0-9]/);
    });

    test("new passwords are generated with symbols option on containing only symbols", () => {
        render(<PasswordGenerator />);
        const password = screen.getByPlaceholderText("Password123!");
        const symbolsCheckbox = screen.getByLabelText("Include Lowercase Letters");
        fireEvent.click(symbolsCheckbox)
        expect(symbolsCheckbox).toBeChecked();

        const generateButton = screen.getByRole("button", { name: /generate/i });
        fireEvent.click(generateButton);

        expect(password).toMatch(/[\W\S_]/);
    });
});

describe("Testing passwords generated with slider", () => {
    test("new passwords are generated with different values dependant on the slider value", () => {
        render(<PasswordGenerator />);
        const password = screen.getByPlaceholderText("Password123!");
        const lowercaseCheckbox = screen.getByLabelText("Include Lowercase Letters");
        const slider = screen.getByRole("slider");
        fireEvent.click(lowercaseCheckbox);
        expect(lowercaseCheckbox).toBeChecked();
        fireEvent.change(slider, { target: { value: 12 }});

        const generateButton = screen.getByRole("button", { name: /generate/i });
        fireEvent.click(generateButton);

        expect(password).toHaveLength(12);

        fireEvent.change(slider, { target: { value: 7 }});
        expect(password).toHaveLength(7);
    });
});

describe("Testing both slider and multiple checkboxes", () => {
    test("new passwords generated with all options contain everything and are correct length", () => {
        render(<PasswordGenerator />);
        const password = screen.getByPlaceholderText("Password123!");
        const checkboxes = screen.getAllByRole("checkbox");
        checkboxes.forEach((checkbox) => {
            fireEvent.click(checkbox);
            expect(checkbox).toBeChecked();
        });
        const slider = screen.getByRole("slider");
        fireEvent.change(slider, { target: { value: 9 }});

        const generateButton = screen.getByRole("button", { name: /generate/i });
        fireEvent.click(generateButton);

        expect(password).toHaveLength(9);
        expect(password).toMatch(/[A-Z]/);
        expect(password).toMatch(/[a-z]/);
        expect(password).toMatch(/[0-9]/);
        expect(password).toMatch(/[\W\S_]/);
    });
});