console.log ("We're connected")
var generateBtn = document.querySelector("#generate");

  
//write a function declaration for generatePassword()
function generatePassword() { 
  
  

//returning your password
}
//function call
function writePassword() {
  var lC = "abcdefghijklmnopqrstuvwxyz".split("");
  var uC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var nums = "0123456789".split("");
  var SpecChar = "!@#$%^&*()".split("");
  var availPasswordChoices = [lC, uC, nums, SpecChar];
  var pwLength = prompt("How many characters do you want?");
  var getpwLength = parseInt(pwLength);

  if (getpwLength >8 && getpwLength <128){

  var useNumbers = confirm("Would you like to use numbers in password?");
  if (useNumbers) {
    availPasswordChoices = availPasswordChoices.concat(nums);   
  }
var uselcLetters = confirm("Would you like to use lower case letters in password?");
  if (uselcLetters) {
    availPasswordChoices = availPasswordChoices.concat(lC);
  }
    var ucLetters = confirm("Would you like to use upper case letters in password?");
  if (ucLetters) {
    availPasswordChoices = availPasswordChoices.concat(uC);
  }
    var useSpecChar = confirm("Would you like to use special characters in password?");
  if (useSpecChar) {
    availPasswordChoices = availPasswordChoices.concat(SpecChar);
  }
  }

}


// Add event listener to generate button
writePassword();
generateBtn.addEventListener("click", writePassword)
