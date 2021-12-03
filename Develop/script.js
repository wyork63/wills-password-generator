// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  window.prompt("Thank you for clicking the button");



// Prompt the user for password criteria
//    password length is between 8 and 128 characters
//      cant be 1-7 or 129-infinity 
//    lowercase, uppercase, numbers, special characters
// validate the input 
// generate password based on criteria 


// once all steps are completed display the password on the page ie return the password 
  
  
  return "heres your password"; 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// variables to pick from

var specialCharacter = [ ' ', '!', '"','#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.','/',':',';','<','=','>','?','@','[','^','_','`','{','|','}','~' ]

var number = [ '0','1','2','3','4','5','6','7','8','9']

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
