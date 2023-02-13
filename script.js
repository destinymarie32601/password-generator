// Assignment Code
var passwordLength = 8;
var characterArray = [];
var alphabetLowcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","_","+"];

var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", writePassword);

function writePassword() {
  var promptCorrect = promptAnswers();
  
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(promptCorrect) {
    var newPassword = generatePassword();
    passwordText.value =  newPassword;
  } else {
    passwordText.value = "";
  }
  //making sure prompts are validated
  // promptAnswers(); // return true or false
 //passwordText.value = password;
}

function generatePassword() {

  var password = "";
  for(var i = 0; i < passwordLength; i++) {
    var randomCharacter = Math.floor(Math.random() * characterArray.length)
    password = password + characterArray[randomCharacter];
  }

  return password;
  //console.log("you clicked it")
  //var passwordLength = window.prompt("How long would you like your password?");
  //return "Generated Password goes right here";
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
//function writePassword() {
 // var password = generatePassword();
  //var passwordText = document.querySelector("#password");

 //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

function promptAnswers () {
  characterArray = [];

  passwordLength = window.prompt("How long would you like your password?");


  if (passwordLength < 8  || passwordLength > 128) {
  alert("Your password needs to be between 8 and 128 characters")
  return false;

}

if (confirm("Do you want lowercase letters in your password?")) {
  characterArray = characterArray.concat(alphabetLowcase);
}

if(confirm("Do you want uppercase letters in your password?")) {
  characterArray = characterArray.concat(alphabetUppercase);
}

if(confirm("Do you want numbers in your password?")) {
  characterArray = characterArray.concat(numberArray);
}

if(confirm("Do you want special letters in your password?")) {
  characterArray = characterArray.concat(specialCharacter);
}

return true;

}