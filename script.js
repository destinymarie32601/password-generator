// Assignment Code
var passwordLength = 128;  //Set the variable to a numeber that is in criteria
//state all of the possible password choices in the variable arrays
var alphabetLowcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var alphabetUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacter = ["!","@","#","$","%","^","&","*","(",")","_","+"];

var generateBtn = document.querySelector("#generate"); //variable links with the button in the html || selecting the elements

generateBtn.addEventListener("click", writePassword); //Event listener to call the variable when the button is clicked and write the password function

function promptAnswers () {   //function to display the prompts and get the answers
  characterArray = []; //answers are stored into the empty array
  passwordLength = window.prompt("How long would you like your password?"); //storing how long the password is into variable

  if (passwordLength < 8  || passwordLength > 128) { //if statement for the length of the password to be in the accepted criteria
  alert("Your password needs to be between 8 and 128 characters") //if it is not then it will alert the user and return false
  return false;

}

if (confirm("Do you want lowercase letters in your password?")) { //if it is between the correct numbers then these if statements will collect the prompt answers
  characterArray = characterArray.concat(alphabetLowcase); //the answers are stored into the empty array  
}

if(confirm("Do you want uppercase letters in your password?")) { //the array of possible answers are getting merged into the character array 
  characterArray = characterArray.concat(alphabetUppercase); 
}

if(confirm("Do you want numbers in your password?")) {
  characterArray = characterArray.concat(numberArray);
}

if(confirm("Do you want special letters in your password?")) {
  characterArray = characterArray.concat(specialCharacter);
}

return true; //return true after the prompt is correctly completed
}

//Answers from the prompt stored in characterArray so that the function can generate a random character from each prompt
function generatePassword() { //function to generate a password with the prompt answers as criteria, and randomly generate it 

  let password = "";
  for(var i = 0; i < passwordLength; i++) { //for loop to generate the password until the string is terminated
    var randomCharacter = Math.floor(Math.random() * characterArray.length) //Math random used for random order for each character in the array length
    password = password + characterArray[randomCharacter]; 
  }
  return password;
  //console.log("you clicked it") - checking if the button generated something at the beginning of the process of this code
  //return "Generated Password goes right here"; // notes to explaing how the function is set up
}

function writePassword() {      //write password function to put the prompt answers into the password text
  var promptCorrect = promptAnswers(); //storing the promt answers into new prompt var
  //linking the generated password text
  var passwordText = document.querySelector("#password");

  //if the prompt answers are correct generate a new password of the prompt answers
  if(promptCorrect) {
    var newPassword = generatePassword();
    passwordText.value =  newPassword;
  } else {
    passwordText.value = "";
  }
  //making sure prompts are validated
  // promptAnswers(); // return true or false
 //passwordText.value = password needs a new password variable 
}

//Citations - some basic methods of my code were figured out from these sources

// Daniel Vega. (2020, June 19). Random Password Generator in Javascript [Video]. Youtube. https://www.youtube.com/watch?v=v2jfGo7ztm8 
// JavaScript (JS) cheat sheet online. JavaScript (JS) Cheat Sheet Online. (n.d.). Retrieved February 13, 2023, from https://htmlcheatsheet.com/js/ 