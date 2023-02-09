// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = window.prompt("How long would you like your password");
var lowerCase = window.confirm("Would you like your password to contain lowercase letters?");
var upperCase = window.confirm("Would you like your password to include uppercase letters?");
var numbers = window.confirm("Would you like your password to contain numbers?");
var specialChar = window.confirm("Would you like your password to include special characters?");

const alphabetLowcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const specialCharacter = ["!","@","#","$","%","^","&","*","(",")","_","+"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
