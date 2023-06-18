// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// 8-128 characters
// may or may not include lowercase, uppercase, numeric, and special char
// function= given a length and options for characters, create a password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() { 
  // ask user for length, store in variable here: 
  let passwordLength = 10;

  // ask user for parameters:
  let useUpperCase = true;
  let useLowerCase = true;
  let useNumericChar = true;
  let useSpecialChar = true;

  // storing options in arrays:
  let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let numericChar = [1,2,3,4,5,6,7,8,9,0];
  let specialChar = ["!","@","#","$","%","^","&","*","(",")","+","-","=","?"];

  //creating a large array of all valid (chosen parameters) arrays:
  let valid = [];

  if (useUpperCase) {
    valid = valid.concat(...upperCase);
  }

  if (useLowerCase) {
    valid = valid.concat(...lowerCase);
  }

  if (useNumericChar) {
    valid = valid.concat(...numericChar);
  }

  if (useSpecialChar) {
    valid = valid.concat(...specialChar);
  }

  // setting empty password variable:
  let password = "";

  //for loop, for length of password, add a character to empty password. chose random item out of valid array:
  for (let i = 0; i < passwordLength; i++) {
    let randomValidIndex = Math.floor(Math.random() * valid.length);
    let newChar = valid[randomValidIndex];
    password += newChar;
  }
  //return password
  console.log(password); 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
