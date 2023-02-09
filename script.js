// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = window.prompt("How long would you like your password");
var lowerCase = window.confirm("Would you like your password to contain lowercase letters?");
var upperCase = window.confirm("Would you like your password to include uppercase letters?");
var numbers = window.confirm("Would you like your password to contain numbers?");
var specialChar = window.confirm("Would you like your password to include special characters?");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
