// Assignment Code
// Add event listener to generate button

const generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);


//Character type arrays
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];


//alert employee to create a new password
function generatePassword() {
    alert("Please create a new, more secure password.");
    
const length = prompt("How many characters would you like your password to have? Enter a number no less than 8 and no more than 128.");
const numslength = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128];

//create a for loop if employee chooses values outside the parameters
for (i = 0; i < 128; i++) {
if (length < 8 || length > 129) {
    alert("Your password must have at least 8 characters and no more than 128 characters.");
    return;
}
else {
alert("Your password will have " + length + " characters.");   
}

//variable declarations of character types
//confirm which character types are to be used in the new password
const confirmSpecialCharacter = confirm("Would you like special characters in your password?");
const confirmNumericCharacter = confirm("Would you like to use numbers in your password?");
const confirmUppercase = confirm("Would you like to have upper case characters in your password?");
const confirmLowercase = confirm("Would you like to have lower case characters in your password?");

//alert at least one must be used if none are chosen
if (confirmSpecialCharacter === false && confirmNumericCharacter === false && confirmUppercase === false && confirmLowercase === false) {
    alert("You must choose at least one character type to be included in your password.");
    return;
}


}
}
         





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

