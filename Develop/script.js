// variables to pick from
// var specialCharacter = [' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.','/',':',';','<','=','>','?','@','[','^','_','`','{','|','}','~']

// var number = ['0','1','2','3','4','5','6','7','8','9']

// var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

// var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

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

    console.log(lengthOfPassword); // will return number entered 
  }

  //function that says yes or no to lowercase letters
  var yesLowerCase = window.confirm("Would you like to include LOWERCASE characters in your password? Click OK for yes or CANCEL for no");
    if (yesLowerCase) {


    console.log(yesLowerCase); //will return true for ok
    }
  // function that says yes or no to upper case letters
  var yesUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password? Click OK for yes or CANCEL for no");
    if (yesUpperCase) {


    console.log (yesUpperCase); //will return true for ok 
    }
  // funciton that says yes or no to numbers
  var yesNumber = window.confirm("Would you like to include NUMBERS in your password? Click OK for yes or CANCEL for no");
    if (yesNumber) {

      console.log (yesNumber); //will return true for ok 
    }

  // function that says yes or no to special charcaters
  var yesSpecialCharacter = window.confirm("Would you like to include SPECIAL CHARACTERS in your password? Click OK for yes or CANCEL for no");
    if (yesSpecialCharacter) {

      console.log (yesSpecialCharacter); //will return true for ok 
    }

  // function that will return back to previous vars if nothing is selected
  while (!yesLowerCase && !yesNumber && !yesUpperCase && !yesSpecialCharacter) {
    window.alert("You must confirm at least one option");
    // is there away to call back to previous four options instead of writing again? 
    var yesLowerCase = window.confirm("Would you like to include LOWERCASE characters in your password? Click OK for yes or CANCEL for no");
    var yesUpperCase = window.confirm("Would you like to include UPPERCASE characters in your password? Click OK for yes or CANCEL for no");
    var yesNumber = window.confirm("Would you like to include NUMBERS in your password? Click OK for yes or CANCEL for no");
    var yesSpecialCharacter = window.confirm("Would you like to include SPECIAL CHARACTERS in your password? Click OK for yes or CANCEL for no");
  }
  // WHEN FINISHED WITH PROJECT DELETE ALL CONSL.LOGS AND CONSOLIDATE CODE 

  //function that somehow gathers responses together and pulls variables if true and doesnt if not 
  // could i put all four responses in one variable and then that variable determines the vars to pull from? 
  var firstPassword = "";
    (yesLowerCase) ? firstPassword += lowerCase: "";
    (yesUpperCase) ? firstPassword += upperCase: "";
    (yesNumber) ? firstPassword += number: "";
    (yesSpecialCharacter) ? firstPassword += specialCharacter: "";

  // for loop that takes these answers - randomly grabs string of variables - then generates it in the box on screen
  // somehow use lengthofpassword to determine the amount of characters given in the password 
  
  // to generate final password 
  var finalPassword = "";
  // var randomanswer can be replaced with specialcharacter
  for(var i = 0; i < lengthOfPassword; i++) {
   finalPassword = firstPassword.charAt(Math.floor(Math.random() * firstPassword.length));
  }
    return finalPassword; 

  console.log(randomAnswer);
  }


//final password


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
