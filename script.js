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

//Character type arrays
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"]

//variable declarations
const confirmlength = "";
const confirmSpecialCharacter;
const confirmNumericCharacter;
const confirmUppercase;
const confirmLowercase;


//alert employee to create a new password
function generatePassword() {
    alert("Please create a new, more secure password.");

const confirmlength = prompt("How many characters would you like your password to have? Enter a number no less than 8 and no more than 128.");

//create a while loop if employee chooses values outside the parameters
while(confirmlength <=7 || confirmlength >= 129) {
  if (confirmlength < 8 ) {
    alert("Your password must have at least 8 characters.");
    return;
}
if (confirmlength > 128) {
    alert("Your password cannot be more than 128 characters.");
    return;
}

}
}
alert("Your password will have " + confirmlength + "characters.");





