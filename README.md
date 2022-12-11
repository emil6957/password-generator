# Password Generator

## Overview

### The challenge

User should be able to:

- Choose the length of the password
- Choose the characters the password will contain
- Be able to generate passwords
- Be able to copy passwords to clipboard
- Be able to see the passwords strength

### Screenshots

<img width="613" alt="password-generator" src="https://user-images.githubusercontent.com/91159544/206935978-d755c05c-e176-44bd-8c9e-85c6490817d1.png">

### Links

- Code URL: [https://github.com/emil6957/password-generator](https://github.com/emil6957/password-generator)

- Live site URL: [https://emil6957.github.io/password-generator](https://emil6957.github.io/password-generator)

## My process

### Built with

- React Typescript
- CSS flexbox
- Test driven development

### What I learned

I learnt and got familiar with using some of typescripts features such as interfaces to define the types within an object.
```js
interface Options {
    uppercase: boolean,
    lowercase: boolean,
    numbers: boolean,
    symbols: boolean,
}

export default Options;
```

And also defining variable types and functions
```js
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
```

This project has also been good for practicing TDD by writing my tests prio to writing the functions
```js
test("new passwords are generated with numbers option on containing only numbers", () => {
    render(<PasswordGenerator />);
    const password = screen.getByPlaceholderText("Password123!");
    const numbersCheckbox = screen.getByLabelText("Include Numbers");
    fireEvent.click(numbersCheckbox)
    expect(numbersCheckbox).toBeChecked();

    const generateButton = screen.getByRole("button", { name: /generate/i });
    fireEvent.click(generateButton);

    expect(password).toHaveDisplayValue(/^[0-9]+$/);
});
```

### Useful resources
- [https://www.youtube.com/watch?v=ydkQlJhodio&ab_channel=Fireship](https://www.youtube.com/watch?v=ydkQlJhodio&ab_channel=Fireship) - A video that gave me a basic rundown of why and how typescript is used.
- [https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&ab_channel=TheNetNinja](https://www.youtube.com/watch?v=7dTTFW7yACQ&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&ab_channel=TheNetNinja) - This playlist showed me how to write and use tests with the react testing library.
