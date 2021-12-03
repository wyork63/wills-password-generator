// variables to pick from

var specialCharacter = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.','/',':',';','<','=','>','?','@','[','^','_','`','{','|','}','~']

var number = ['0','1','2','3','4','5','6','7','8','9']

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

//Opening welcome
alert("Welcome to Will's password generator. Click the red button to get started.");

// Assignment code here
function generatePassword() {{

  // first prompt 
  var lengthOfPassword = Number(window.prompt("Type in how long you would like your password to be (between 8 and 128 characters)"));
  // if password is not between 8 and 128 it returns to prompt again 
    while(lengthOfPassword < 8 || lengthOfPassword > 128) {
      lengthOfPassword = Number(window.prompt("Your input is invalid. Make sure your legth is between 8 and 128"));  
    }
  }

  //function that says yes or not to lowercase letters
  var yesLowerCase = window.confirm("Would you like to include LOWERCASE characters in your password? Click OK for yes or CANCEL for no");
    if (yesLowerCase) {

    }
  // function that says yes or no to upper case letters
  var yesUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password? Click OK for yes or CANCEL for no");


  // funciton that says yes or no to numbers
  var yesNumber = window.confirm("Would you like to include NUMBERS in your password? Click OK for yes or CANCEL for no");
  

  // function that says yes or no to special charcaters
  var yesSpecialCharacter = window.confirm("Would you like to include SPECIAL CHARACTERS in your password? Click OK for yes or CANCEL for no");
    

  //function that gathers responses from prior answer 

  // for loop that takes these answers - randomly grabs string of variables - then generates it in the box on screen 
  var randomAnswer = specialCharacter[Math.floor(Math.random() * specialCharacter.length)];
  console.log(randomAnswer);
  }


//final password
var finalPassword = "";


// GIVEN CODE BELOW

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
