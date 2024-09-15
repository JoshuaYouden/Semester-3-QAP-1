#!/usr/bin/env node

const process = require("node:process");

// Function that generates a password.
function generatePassword(length = 8) {
  const characters = "abcdefghijklmnopqrstuvwxyz";
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
    "Password: zllofkbv"`
  );
}

// Handles the arguments provided by the user.
const userArguments = process.argv.slice(2);

if (userArguments.includes("--help") || userArguments.includes("-h")) {
  printHelpMessage();
  return;
}

// The is the default length if none is provided.
let lengthPassword = 8;

const length =
  userArguments.indexOf("--length") !== -1
    ? userArguments.indexOf("--length")
    : userArguments.indexOf("-l");

if (length !== -1) {
  const lengthValue = userArguments[length + 1];

  if (!isNaN(lengthValue) && parseInt(lengthValue) > 0) {
    lengthPassword = parseInt(lengthValue);
  } else {
    console.error("Error: Provide a valid length.");
    return;
  }
}

const password = generatePassword(lengthPassword);

console.log(`Password: ${password}`);

// End of program.
