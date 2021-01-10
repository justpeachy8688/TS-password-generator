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
caseArray = [];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H"];
numberChar = ["1", "2", "3", "4", "5", "6", "7", "8"]
specialChar = ["!", "@", "#", "$", "*", ";", "?", ':']

//Creating a function for generating the password
function generatePassword() {
  var characters = "abcdefgh";
  var password = "";



  for (var i = 0; i < 8; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password = password + characters[randomNumber];
  }
}


