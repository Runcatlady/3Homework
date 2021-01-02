// Assignment Code
// Add event listener to generate button

const generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);


//Character type arrays
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

//variable declarations
const confirmlength = confirm("Choose a password length from 8 characters up to 128 characters");
const confirmSpecialCharacter = confirm("Would you like special characters in your password?");
const confirmNumericCharacter = confirm("Would you like to use numbers in your password?");
const confirmUppercase = confirm("Would you like to have upper case characters in your password?");
const confirmLowercase = confirm("Would you like to have lower case characters in your password?");


//alert employee to create a new password
function generatePassword() {
    alert("Please create a new, more secure password.");
    

const length = prompt("How many characters would you like your password to have? Enter a number no less than 8 and no more than 128.");

//create a while loop if employee chooses values outside the parameters
while(userlength <=7 || userlength >= 129) {
  if (userlength < 8 ) {
    alert("Your password must have at least 8 characters and no more than 128 characters.");
    return;
}


}
}
alert("Your password will have " + userlength + "characters.");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}







