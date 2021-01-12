// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create arrays for uppercase, lowercase, numbers and special characters
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8"]
var specialChar = ["!", "@", "#", "$", "*", ";", "?", ':']

//Prompt for user to start
window.onload = alert("Welcome! Please click 'Generate Password' to start!");

//Creating a function for generating the password
function getPasswordOptions() {


  //Set variables
  var charLength = parseInt(prompt("How many characters would you like your password to be?"));
  if (isNaN(charLength)) {
    alert("Please provide a valid number.");
    // console.log(charLength.length)
    return;
  }
  if (charLength < 8 || charLength > 128) {
    alert("It is reccomended to have a password between 8 and 128 characters long! Please start over.");
    return;
  }

  //declare boolean, and ask user input
  useLowerCase = confirm("Do you want to use lowercase characters?");
  useUpperCase = confirm("Do you want to use uppercase characters?");
  useNumber = confirm("Do you want to use numeric characters?");
  useSpecial = confirm("Do you want to use special characters?");

  if (useLowerCase === false && useUpperCase === false && useNumber === false && useSpecial === false) {
    alert("Please choose a character type.");
    return;
  }
  var passOptions = {
    charLength: charLength, useLowerCase: useLowerCase, useUpperCase: useUpperCase, useNumber: useNumber, useSpecial: useSpecial
  };
  // console.log(passOptions);
  return passOptions;
}

function randomElement(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomChar = arr[randomIndex];
  return randomChar;
}

function generatePassword() {
  var options = getPasswordOptions()
  // chararcters to be chosen for the password
  var possibleChar = [];
  // each type of chosen character to ensure each will be used
  var guaranteedChar = [];
  //actual characters for the password
  var passArray = [];
  if (options.useLowerCase) {
    possibleChar = possibleChar.concat(lowerCase)
    guaranteedChar.push(randomElement(lowerCase))
  }

  if (options.useUpperCase) {
    possibleChar = possibleChar.concat(upperCase)
    guaranteedChar.push(randomElement(upperCase))
  }

  if (options.useNumber) {
    possibleChar = possibleChar.concat(numberChar)
    guaranteedChar.push(randomElement(numberChar))
  }

  if (options.useSpecial) {
    possibleChar = possibleChar.concat(specialChar)
    guaranteedChar.push(randomElement(specialChar))
  }

  for (var i = 0; i < options.charLength; i++) {
    var tempChar = randomElement(possibleChar)
    passArray.push(tempChar)
  }
  for (var i = 0; i < guaranteedChar.length; i++) {
    passArray[i] = guaranteedChar[i]

  }
  console.log(passArray)
  return passArray.join("");
}

//generateButton.onclick = generatePassword;

//Bonus - copy to clipboard
// document.querySelector("textarea").select();
// document.execCommand("Copy");
// alert("Password copied to Clipboard!");