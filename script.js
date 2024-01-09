// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var number = "01234567890"
  var symbol = "!@#$%^&*-_=+,<.>/?"






  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
