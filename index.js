#!/usr/bin/env node

const process = require("node:process");

// function message if the user needs help
function printHelpMessage() {
  console.log(
    `Usage: password-generator "<Text>" 
    Example: 
    password-generator length: "8" 
    
    Output: 
    "password`
  );
}
