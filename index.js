#!/usr/bin/env node

const process = require("node:process");

// Function that generates a password.
function generatePassword(
  length = 8,
  includeNums = false,
  includeCaps = false,
  includeSyms = false
) {
  let characters = "abcdefghijklmnopqrstuvwxyz";
  if (includeNums) {
    characters += "0123456789";
  }
  if (includeCaps) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeSyms) {
    characters += "!@#$%^&*()_-+{}<>?,.";
  }
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
    `Usage: password-generator [options] <Number>

    Options:
    --help, -h  --> Displays this help message
    --length, -l --> Specify the length of the password (Default: 8)
    --numbers, -n --> Include numbers in the password
    --capitals, -c --> Include capitals in the password
    --symbols, -s --> Include symbols in the password
    
    Example: 
    password-generator --length 8 --numbers --capitals --symbols
    password-generator -l 8 -n -c -s
    
    Output: 
    "Password: Zl^6fK2$"`
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
let includeNums = false;
let includeCaps = false;
let includeSyms = false;

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
    case "--numbers":
    case "-n":
      includeNums = true;
      break;
    case "--capitals":
    case "-c":
      includeCaps = true;
      break;
    case "--symbols":
    case "-s":
      includeSyms = true;
      break;
  }
});

const password = generatePassword(
  lengthPassword,
  includeNums,
  includeCaps,
  includeSyms
);

console.log(`Password: ${password}`);

// End of program.
