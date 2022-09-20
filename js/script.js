// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {

  var passwordLength = window.prompt("Password Length? (8-128 characters)")
  
  if (passwordLength >= 8 && passwordLength <= 128) {
    var newPasswordLength = parseInt(passwordLength);
} else {
  window.alert("Password length must be between 8 and 128 characters")
}

  var wantUppercase = confirm("Include Uppercase Letters?")
  var wantLowercase = confirm("Include Lowercase Letters?")
  var wantNumbers = confirm("Include Numbers?")
  var wantSpecial = confirm("Include Special Characters?")

  var possibleUppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var possibleLowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var possibleNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var possibleSymbols = ["!", "#", "@", "$", "%", "&", "*", "+", "-", "=", ".", "/", ":", ";", "<", ">", ",", "?", "^", "~", "`", "|"]

  var choices = []

  if (wantUppercase === true) {
    choices.push(possibleUppercaseLetters)
  }
}
 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
