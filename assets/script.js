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
var caseArray = [];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H"];
var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8"]
var specialChar = ["!", "@", "#", "$", "*", ";", "?", ':']

//Prompt for user to
window.onload = alert("Welcome! Please click 'Generate Password' to start!");

//Creating a function for generating the password
function generatePassword() {
  var characters = "abcdefgh";
  var password = "";

  //Set variables
  var charLength = prompt("How many characters would you like your password to be?");
  if (charLength < 8 || charLength > 128) {
    alert("It is reccomended to have a password between 8 and 128 characters long! Please start over.");
  }

  //declare boolean, and ask user input
  useLowerCase = confirm("Do you want to use lowercase characters?");
  useUpperCase = confirm("Do you want to use uppercase characters?");
  useNumber = confirm("Do you want to use numeric characters?");
  useSpecial = confirm("Do you want to use special characters?");

  for (var i = 0; i < 8; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password = password + characters[randomNumber];
  }
}

//generateButton.onclick = generatePassword;

//Bonus - copy to clipboard
document.querySelector("textarea").select();
document.execCommand("Copy");
alert("Password copied to Clipboard!");