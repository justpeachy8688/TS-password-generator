# TS-password-generator

## Description
This is an application that one can use to generate a random password based on the criteria they choose in a series of prompts. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code. It has a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.

## Contents of project
This project contains an index.html file, script.js file, and a style.css file. To view the project, click the link below.

[Link to deployed application](https://justpeachy8688.github.io/TS-password-generator)

## Acceptance Criteria
GIVEN I need a new, secure password<br>
WHEN I click the button to generate a password<br>
THEN I am presented with a series of prompts for password criteria<br>
WHEN prompted for password criteria<br>
THEN I select which criteria to include in the password<br>
WHEN prompted for the length of the password<br>
THEN I choose a length of at least 8 characters and no more than 128 characters<br>
WHEN prompted for character types to include in the password<br>
THEN I choose lowercase, uppercase, numeric, and/or special characters<br>
WHEN I answer each prompt<br>
THEN my input should be validated and at least one character type should be selected<br>
WHEN all prompts are answered<br>
THEN a password is generated that matches the selected criteria<br>
WHEN the password is generated<br>
THEN the password is either displayed in an alert or written to the page<br>

## Satisfying acceptance criteria
To satisfy the first, I created a button in my html that, when clicked, would start the password generator script.

To satisfy the second, third and fourth, a series of prompts are used to determine exactly  which characters the user would like to use as well as how many character in the password are desired.

To satisfy the fifth, the character prompts are checked to see if all are false. If so, the questions are asked again. The password length prompt checks for input above or below a certain threshold as well as NaN, null, and inputs that are not numbers.

To satisfy the sixth, four character arrays are created with uppercase letters, lowercase letters, special characters, and numbers. Arrays to be included in password generation are pushed into an array.  A loop is run for the length of the password, and two random numbers are generated. The first random number chooses which character array will be used and the second chooses a random character from the selected array. The character is then concatenated into a password string variable.

To satisfy the seventh, The script has updated the HTML page to show the password that has been generated.
<br>

![Example Screenshot](assets/password.png)