// Assignment Code
var passwordLength = window.prompt("How long would you like your password?");


var alphabetLowcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var number = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","_","+"];




var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("you clicked it")
  //var passwordLength = window.prompt("How long would you like your password?");



  return "Generated Password goes right here";
}

//if (passwordLength < 8  || passwordLength > 128) {
  //window.alert("Your password needs to be between 8 and 128 characters")
  //return;
//}


//var lowerCase = window.confirm("Would you like your password to contain lowercase letters?");
//var upperCase = window.confirm("Would you like your password to include uppercase letters?");
//var numbers = window.confirm("Would you like your password to contain numbers?");
//var specialChar = window.confirm("Would you like your password to include special characters?");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


