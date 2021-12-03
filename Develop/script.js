// variables to pick from

var specialCharacter = " !\"#$%&`'()*+,-.:'<=>?@[^_{}|`]"
var number = "0123456789"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowerCase = "abcdefghijklmnopqrstuvwxyz"

//Opening welcome
alert("Welcome to Will's password generator. Click the red button to get started.");

// Assignment code here
function generatePassword() {{

  // password length prompt 
  var lengthOfPassword = Number(window.prompt("Type in how long you would like your password to be (between 8 and 128 characters)"));
  // if password is not between 8 and 128 it returns to prompt again 
    while(lengthOfPassword < 8 || lengthOfPassword > 128);
    // need to add something that will kick back letters
    while(isNaN(lengthOfPassword)) {
      lengthOfPassword = Number(window.prompt("Your input is invalid. Make sure to enter a NUMBER between 8 and 128"));  
    } 
  }

  //function that says yes or no to lowercase letters 
  var yesLowerCase = window.confirm("Would you like to include LOWERCASE characters in your password? Click OK for yes or CANCEL for no");
  
  // function that says yes or no to upper case letters
  var yesUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password? Click OK for yes or CANCEL for no");
    
  // funciton that says yes or no to numbers
  var yesNumber = window.confirm("Would you like to include NUMBERS in your password? Click OK for yes or CANCEL for no");
   
  // function that says yes or no to special charcaters
  var yesSpecialCharacter = window.confirm("Would you like to include SPECIAL CHARACTERS in your password? Click OK for yes or CANCEL for no");

  // function that will return back to previous vars if nothing is selected
  while (!yesLowerCase && !yesNumber && !yesUpperCase && !yesSpecialCharacter) {
    window.alert("You must confirm at least one option");
    // is there away to call back to previous four options instead of writing again? 
    var yesLowerCase = window.confirm("Would you like to include LOWERCASE characters in your password? Click OK for yes or CANCEL for no");
    var yesUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password? Click OK for yes or CANCEL for no");
    var yesNumber = window.confirm("Would you like to include NUMBERS in your password? Click OK for yes or CANCEL for no");
    var yesSpecialCharacter = window.confirm("Would you like to include SPECIAL CHARACTERS in your password? Click OK for yes or CANCEL for no");
  }
  //function that gathers responses together and pulls variables if true and doesnt if not 
  var templatePassword = "";
  // question mark creates an if statement that if it is true from the above variables - it will add the lowercase variables to the password template 
    (yesLowerCase) ? templatePassword += lowerCase: "";
    (yesUpperCase) ? templatePassword += upperCase: "";
    (yesNumber) ? templatePassword += number: "";
    (yesSpecialCharacter) ? templatePassword += specialCharacter: "";


  // to generate final password 
  var finalPassword = "";
  // for loop that takes these answers - randomly grabs string of variables - then generates it in the box on screen
  // use lengthofpassword variable to tell new variable (i) that it needs to be shorter than that 
  // help from this on stackoverflow
  for(var i = 0; i < lengthOfPassword; i++) {
   finalPassword += templatePassword.charAt(Math.floor(Math.random() * templatePassword.length));
  }
  //final password
    return finalPassword; 

  }

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
