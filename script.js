// Assignment Code
// Add event listener to generate button

const generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);


//Character type arrays
const number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const upperChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
const userPicks = [];
const passwordCharacters = ["number", "upperChar", "lowerChar", "specialChar"];


//alert employee to create a new password
function generatePassword() {
    alert("Please create a new, more secure password.");
    
const length = prompt("How many characters would you like your password to have? Enter a number no less than 8 and no more than 128.");

//create a for loop if employee chooses values outside the parameters
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
}

//ask employee which character types they would like to be included in their password
if (confirmSpecialCharacter && confirmNumericCharacter && confirmUppercase && confirmLowercase) {
    alert("Your password will contain " + length + " characters with all 4 character  types.");
}


else if (!confirmNumericCharacter && !confirmUppercase && !confirmLowercase ) {
    alert("Your password will contain " + length + " special characters");
}
else if (!confirmSpecialCharacter && !confirmUppercase && !confirmLowercase) {
    alert("Your password will only contain" + length + " numeric characters.");
}
else if (!confirmSpecialCharacter && !confirmNumericCharacter && confirmLowercase) {
    alert("Your password will only contain" + length + " uppercase characters.");
}
else if (!confirmSpecialCharacter && !confirmNumericCharacter && !confirmUppercase) {
    alert("Your password will only contain " + length + " lowercase characters.");
}
else if (!confirmUppercase && !confirmLowercase) {
    alert("Your password will contain " + length + " special and numeric characters.");
}
else if (!confirmNumericCharacter && !confirmLowercase) {
    alert("Your password will contain " + length + " special and uppercase characters.");
}
else if (!confirmNumericCharacter && !confirmUppercase) {
    alert("Your password will contain " + length + " special and lowercase characters.");
}
else if (!confirmLowercase && !confirmSpecialCharacter) {
    alert("Your password will contain " + length + " numeric and uppercase characters.");
}
else if (!confirmUppercase && !confirmSpecialCharacter) {
    alert("Your password will contain " + length + " numeric and lowercase characters.");
}
else if (!confirmSpecialCharacter && !confirmNumericCharacter) {
    alert("Your password will contain " + length + " uppercase and lowercase characters.");
}
else if (!confirmLowercase) {
    alert("Your password will contain " + length + " special, number and uppercase characters.");
}
else if (!confirmNumericCharacter) {
    alert("Your password will contain " + length + " special, lowercase and uppercase characters.");
}
else if (!confirmUppercase) {
    alert("Your password will contain " + length + " special, number and lowercase characters.");
}
else if (!confirmSpecialCharacter) {
    alert("Your password will contain " + length + " number, lowercase and uppercase characters.");
}

//generate password with the employees selected criteria


if (confirmSpecialCharacter === true) {  
    userPicks.push(specialChar);
    console.log(userPicks);
}
if (confirmLowercase === true) {
    userPicks.push(lowerChar);
    console.log(userPicks);     
} 
if (confirmNumericCharacter === true) {
    userPicks.push(number);
}  
if (confirmUppercase) {
    userPicks.push(upperChar);
}
  for (let i = 0; i < length; i++) {
    const randomChar = userPicks[Math.floor(Math.random() * userPicks.length)];
  } 
    console.log(randomChar);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

generatePassword();