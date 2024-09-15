#!/usr/bin/env node

const process = require("node:process");

// Function that generates a password.
function generatePassword(length = 8, includeNums = false) {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  let password = "";

  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }

  return password;
}

// Function that prints this message if the user inputs "--help" or "-h".
function printHelpMessage() {
  console.log(
    `Usage: password-generator --length <Number>
    
    Example: 
    password-generator --length 8
    password-generator -l 8
    
    Output: 
    "Password: zlldfkgv"`
  );
}

// Handles the arguments provided by the user.
const userArguments = process.argv.slice(2);

if (userArguments.includes("--help") || userArguments.includes("-h")) {
  printHelpMessage();
  return;
}

// These are the default settings if none are provided.
let lengthPassword = 8;

userArguments.forEach((arg, index) => {
  switch (arg) {
    case "--length":
    case "-l":
      const lengthValue = userArguments[index + 1];
      if (!isNaN(lengthValue) && parseInt(lengthValue) > 0) {
        lengthPassword = parseInt(lengthValue);
      } else {
        console.error(
          "Error: Invalid length provided. Please provide a valid number."
        );
        return;
        break;
      }
  }
});

const password = generatePassword(lengthPassword);

console.log(`Password: ${password}`);

// End of program.
