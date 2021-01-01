// Assignment Code
//Alert employee to create a new, secure password.
alert("Please create a new, more secure password.");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const passwordParts = ["Uppercase Characters", "Lowercase Characters", "Numeric Characters", "Special Characters"];
const passwordValues = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "abcdefghijklmnopqrstuvwxyz",
  "0123456789",
  "!#$%&()<:>\*+-/=?@[|^_;~",
];


function generate() {
//prompt employee for password length at least 8 characters and no more than 128 characters

let userLengthprompt = prompt("How many characters would you like your password to have? Enter a number no less than 8 and no more than 128.");

if (userLengthprompt < 8) {
    alert("Your password must have at least 8 characters.");
    return;
}
if (userLengthprompt > 128) {
    alert("Your password cannot be more than 128 characters.");
    return;
}

//prompt employee for character types

 


}

